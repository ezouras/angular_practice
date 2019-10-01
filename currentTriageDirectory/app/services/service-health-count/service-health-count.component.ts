import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '.service-health-count',
  templateUrl: './service-health-count.component.html',
  styleUrls: ['./service-health-count.component.less']
})
export class ServiceHealthCountComponent implements OnInit {
  @Input() healthy: number = 0;
  @Input() unhealthy: number = 0;
  @Input() healthyQueryParams;
  @Input() unhealthyQueryParams;

  constructor() { }

  ngOnInit() {
  }

}
