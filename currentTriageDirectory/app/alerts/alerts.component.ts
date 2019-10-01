import { Component, OnInit } from '@angular/core';

import { faExclamationTriangle, faFire } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.less']
})
export class AlertsComponent implements OnInit {

  // Icons
  faExclamationTriangle = faExclamationTriangle;
  faFire = faFire;

  constructor() { }

  ngOnInit() {
  }

}
