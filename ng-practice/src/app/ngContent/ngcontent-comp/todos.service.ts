import { Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class TodoList{
  public todos=["todo1","todo2"];

  public add(todo){
      this.todos.push(todo);
  }

  constructor(){
  }

  public getAll(){
    console.log("in get all function");
    console.log("todos are ")
    console.log(this.todos);
    return this.todos;
  }



}
