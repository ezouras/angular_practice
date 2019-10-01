import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, interval } from 'rxjs';

import { environment } from '../../environments/environment';

type StatusCounts = {healthy: number, unhealthy: number};
type EnvironSummary = {[environName: string]: StatusCounts};
type ServiceHealthData = {[attributeValue: string]: EnvironSummary};

export class ServiceHealthWatcher {
  public environList: Array<string>;
  private attributeName: string;
  private poller = interval(5000);
  public serviceHealthData: ServiceHealthData = {};
  private svcHealthBase: string;
  public hasError: boolean = false;

  constructor(
      private http: HttpClient,
      svcHealthBase: string,
      attributeName: string
  ) {
    this.svcHealthBase = svcHealthBase;
    this.attributeName = attributeName;
    this.poller.subscribe(() => {
      this.updateData();
    });
  }

  get hasData(): boolean {
    return !!Object.keys(this.data).length;
  }

  get hasEnvironments(): boolean {
    return !!this.environments.length;
  }

  get data(): ServiceHealthData {
    return this.serviceHealthData;
  }

  get environments(): Array<string> {
    return this.environList;
  }

  public updateData() {
    this.http.get<ServiceHealthData>(
        `${this.svcHealthBase}/${this.attributeName}`
    ).subscribe(
      (data) => {
        this.serviceHealthData = data;
        this.environList = this.extractEnvironList(data);
      },
      (errorData) => {
        this.serviceHealthData = {};
        this.environList = [];
        this.hasError = true;
      }
    );
  }

  private extractEnvironList(healthData: ServiceHealthData): Array<string> {
    let allEnvirons = new Set();
    for(let attributeValue of Object.values(healthData)) {
      for(let environName in attributeValue) {
        allEnvirons.add(environName);
      }
    }
    return Array.from(allEnvirons.values()).sort();
  }

  public environHasUnhealthy(environName: string): boolean {
    for(let attribute of Object.values(this.serviceHealthData)) {
      if(!!attribute[environName] && attribute[environName].unhealthy > 0) {
        return true;
      }
    }
    return false;
  }

  public attributeHasUnhealthy(attributeValue: string): boolean {
    if(!this.serviceHealthData[attributeValue]) {
      return false;
    }

    for(let environ of Object.values(this.serviceHealthData[attributeValue])) {
      if(environ.unhealthy > 0) {
        return true;
      }
    }

    return false;
  }

}


@Injectable({
  providedIn: 'root'
})
export class ServiceHealthService {
  private svcHealthBase = `${environment.triageAPIBaseURL}/services_health`;
  private watchers: {[attributeName: string]: ServiceHealthWatcher} = {};

  constructor(private http: HttpClient) {}

  getWatcher(attributeName: string): ServiceHealthWatcher {
    if(!(attributeName in this.watchers)) {
      this.watchers[attributeName] = new ServiceHealthWatcher(
        this.http, this.svcHealthBase, attributeName
      );
    }
    return this.watchers[attributeName];
  }

}
