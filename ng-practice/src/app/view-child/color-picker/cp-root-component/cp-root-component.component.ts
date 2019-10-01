import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cp-root-component',
  templateUrl: './cp-root-component.component.html',
  styleUrls: ['./cp-root-component.component.css']
})
export class CpRootComponentComponent implements OnInit, AfterViewInit {

  constructor() { }

  /*
  @ViewChild(ColorSampleComponent)
  priamrySampleComponent:ColorSampleComponent;
  */
  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log("Values on ngAfterViewInit");
    //console.log("primarySampleComponent: ", this.primarySampleComponent)
  }

}
