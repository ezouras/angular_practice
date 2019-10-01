import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '.app-test',
  selector: '[app-test]',
  //templateUrl: './test.component.html',
  //can use an inline template as well.
  template:`<div>Inline template</div>`,
  //styleUrls: ['./test.component.css']
  //you can have styles in line as well
  styles:[`
  div{
    color: purple;
    background: pink;
    font:bold;
  }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
