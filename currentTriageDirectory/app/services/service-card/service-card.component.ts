import { Component, Input, OnInit } from '@angular/core';
import {
  faAsterisk,
  faBuilding,
  faSkull,
  faSmile,
  faServer
} from '@fortawesome/free-solid-svg-icons';

import { Service } from '../service.model';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.less']
})
export class ServiceCardComponent implements OnInit {
  @Input() service: Service;

  /* Icons */
  faAsterisk = faAsterisk;
  faBuilding = faBuilding;
  faSkull = faSkull;
  faSmile = faSmile;
  faServer = faServer;

  constructor() { }

  ngOnInit() {
  }

}
