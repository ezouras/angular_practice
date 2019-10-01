import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-child',
  template:  `<h2>Message from child template is: {{childMessage}}</h2>`,

  styleUrls: []
})
export class ViewChildComponent implements OnInit {

  constructor() { }
childMessageDefinedInComponent:string="I'm defined in the child class"

//receiving input from parent
 @Input() childMessage: string;


  ngOnInit() {
  }

}
