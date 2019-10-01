import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {ViewChildComponent} from "../view-child.component";
//https://www.infragistics.com/community/blogs/b/infragistics/posts/simplifying-viewchild-nad-contentchild-in-angular
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(ViewChildComponent) viewChildComp:ViewChildComponent;
  @ViewChild(ViewChildComponent) viewChildCompString:string;

  parentMessage:any;

  constructor() { }

  ngOnInit() {
    this.parentMessage="Hi! i'm text defined in the parent!";
    console.log("view child defined component is: ",this.viewChildComp);
    console.log("grabbed string from the child is: ",this.viewChildCompString);

  }

}
