import { Component, OnInit, ContentChild } from '@angular/core';
import { TodoList } from './todos.service';
import {NgcontentFooterComponent}from '../ngcontent-footer/ngcontent-footer.component';

@Component({
  selector: 'app-ngcontent-comp',
  template:`
    <section>
      Add todo:
      <!--<todo-input (todo)="addTodo($event)"></todo-input>-->
    </section>
    <section>
      <h4 *ngIf="todos.getAll().length">Todo list</h4>
      <ul *ngFor="let todo of todos.getAll()">
        <li>{{todo}}</li>
      </ul>
    </section>
<ng-content select="app-ngcontent-footer"></ng-content>

  `
})
export class NgcontentCompComponent implements OnInit {

  constructor(private todos: TodoList) { }

  @ContentChild(NgcontentFooterComponent) footer:NgcontentFooterComponent;

  ngOnInit() {
  }

  ngAfterViewInit(){
    //any selectors that are used in the dom are available  here..
  }

  ngAfterContentInit(){
    //footer is available here
  }

  addTodo(todo){
    this.todos.add(todo);
  }

}
