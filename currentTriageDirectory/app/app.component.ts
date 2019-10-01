import { Component } from '@angular/core';
import { NavStatusService } from './layout/nav-status.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],

})
export class AppComponent {
  navService: NavStatusService;

  constructor(navService: NavStatusService) {
    this.navService = navService;
  }
}
