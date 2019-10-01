import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.less']
})
export class ControlsComponent implements OnInit {

  /* Icons */
  faEye = faEye;

  constructor() { }

  ngOnInit() {
  }

}
