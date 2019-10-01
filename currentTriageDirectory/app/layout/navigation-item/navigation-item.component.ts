import { Component, Input, OnInit } from '@angular/core';
import {
  faCloud,
  faCoffee,
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.less']
})
export class NavigationItemComponent implements OnInit {
  @Input() displayText: string = "";
  @Input() iconName = "faCoffee";
  @Input() isSelected: boolean = false;
  @Input() path: string = "";

  /* Icons */
  faCloud = faCloud;
  faCoffee = faCoffee;
  faPlusCircle = faPlusCircle;

  constructor() { }

  ngOnInit() {
  }

  getIcon(name: string) {
    return this[name];
  }

}
