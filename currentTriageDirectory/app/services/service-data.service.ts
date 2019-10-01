import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, interval } from 'rxjs';

import { environment } from '../../environments/environment';
import { HealthStatus, Service } from './service.model';


type FilterOption = {type: string, name: string};
type ServiceData = {
  customData: string,
  datacenter: string,
  environment: string,
  hostname: string,
  instanceId: string,
  ipAddress: string,
  recipe: string,
  serviceName: string,
  startTime: number,
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {
  private _services: Array<Service> = [];
  private poller = interval(5000);
  public hasError: boolean = false;

  private filterableKeys: Array<string> = [
      "environment", "service_name", "datacenter", "status"
  ];

  constructor(private http: HttpClient) {
    this.updateData();
    this.poller.subscribe(() => {
      this.updateData();
    });
  }

  private getSortFunction(param: string, order: number=1) {
    return (svcA, svcB) => {
      return order * (
        +(svcA[param] >= svcB[param]) - Number(svcA[param] <= svcB[param])
      );
    };
  }

  private getUnique(options: Array<FilterOption>): Array<FilterOption> {
    return Array.from(
      new Set(
        options.map(obj => JSON.stringify(obj)))
      ).map(str => JSON.parse(str)
    );
  }

  getFilterOptions(): Array<FilterOption> {
    let options = [];
    for(let service of this._services) {
      for (let key of this.filterableKeys) {
        options.push({type: key, name: service[key]});
      }
    }
    return this.getUnique(options).sort(
      this.getSortFunction("name")
    ).sort(this.getSortFunction("type"));
  }

  public updateData() {
    this.http.get<Array<ServiceData>>(
        `${environment.triageAPIBaseURL}/services`
    ).subscribe(
      (data) => this._services = data.map((data: ServiceData) => new Service(
        data.customData,
        data.datacenter,
        data.environment,
        data.hostname,
        data.instanceId,
        data.recipe,
        data.serviceName,
        data.startTime,
        data.status === "healthy" ? HealthStatus.HEALTHY : HealthStatus.UNHEALTHY
      )),
      (errorData) => {
        this._services = [];
        this.hasError = true;
      }
    );
  }

  getServices(params): Array<Service> {
    return this._services.filter((service: Service) => {
      for(let param in params) {
        if(
            params[param].length < 1 ||
            params[param].indexOf(service[param]) < 0
        ) {
          return false;
        }
      }
      return true;
    }).sort(
      this.getSortFunction("service_name")
    ).sort(this.getSortFunction("status", -1));
  }
}
