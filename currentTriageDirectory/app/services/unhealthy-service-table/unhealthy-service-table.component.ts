import { Component, Input, OnInit } from '@angular/core';

import { ServiceHealthService, ServiceHealthWatcher } from '../service-health.service';

@Component({
  selector: 'app-unhealthy-service-table',
  templateUrl: './unhealthy-service-table.component.html',
  styleUrls: ['./unhealthy-service-table.component.less']
})
export class UnhealthyServiceTableComponent implements OnInit {
  @Input() attributeName: string = "datacenter";
  watcher: ServiceHealthWatcher;

  constructor(private service: ServiceHealthService) {}

  ngOnInit() {
    this.watcher = this.service.getWatcher(this.attributeName);
    this.watcher.updateData();
  }

  buildQueryParameters(attributeKey: string, env?: string, status?: string) {
    return {[this.attributeName]: attributeKey, environment: env, status: status};
  }

  get message() {
    return this.watcher.hasError ? "Data could not be loaded." : "Loading data...";
  }

}
