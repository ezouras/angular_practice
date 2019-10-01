import { Component, OnInit } from '@angular/core';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

import { NavStatusService } from '../layout/nav-status.service'

@Component({
  selector: '.alerts-panel',
  templateUrl: './alerts-panel.component.html',
  styleUrls: ['./alerts-panel.component.less']
})
export class AlertsPanelComponent implements OnInit {
  faCaretRight = faCaretRight;
  faCaretLeft = faCaretLeft;
  isOpen: boolean = false;
  navService: NavStatusService;

  constructor(navService: NavStatusService) {
    this.navService = navService;
  }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.navService.alertPanelActive = this.isOpen;
  }

}
