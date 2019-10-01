import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <!-- INterpolation -->
  <h1 [style.color]="titleColor">**Interpolation**</h1>
  <h2> Welcome {{name}}!</h2>
  <h2>{{2+2}}</h2>
  <h2>{{"Welcome " + name}}</h2>
  <h2>{{name.length}}</h2><!-- java methods-->
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{siteURL}}</h2>

  <!--Property binding-->
  <h1 [style.color]="titleColor">**Property Binding**</h1>
  <input [id]="myId" type="text" value="Evie">
  <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Evie">
  <br>
  <input bind-disabled="isDisabled" id="{{myId}}" type="text" bind-value='name'>

  <!--bind style classes to HTML elements -->
  <h1> HTML Style Binding </h1>
  <h2 class="text-success">Coderevolution</h2><!-- how it's typically done-->
  <h2 [class]="successClass">Coderevolution binded</h2>
  <!-- can use one or the other, but not both -->
  <h2 class="text-special" [class]="successClass">code two classes</h2>
  <!-- using a conditional to style -->
  <h2 [class.text-danger]="hasError">Using a conditional for styling </h2>

  <h2 [ngClass]="messageClasses">Using Multiple styles with NGclass</h2>

  <h2 [style.color]="'teal'">Style  Binding </h2>
  <!-- using a conditional expression -->
  <h2 [style.color]="hasError ? 'purple' : 'blue'">bind and condition</h2>

  <!-- style based on JS class property-->
  <h2 [style.color]="highlightColor">This color is from JS property</h2>
  <!-- using an ng directive -->
  <h2 [ngStyle]="titleStyles">style binding with an NG directive</h2>


  <!--Event Binding -->
  <h1 [style.color]="titleColor">**Event Binding**</h1>
  <h2 [ngStyle]="eventBindStyle"> Greet upon clicking! </h2>
  <button (click)="iWillClick($event)">Greet</button>
  <h2 [style.color]="eventBindColor">using interpolation and event binding</h2>
  <button (click)="clickAgain($event)">Greet n Bind with Interpolation</button>
  <h2>{{greeting}}</h2>

  <!-- when you have a small taks and you just put it in the template itself-->
  <button (click)="onTheFly='whooowah!'">inline interpolation with binding!</button>
  <h2>{{onTheFly}}</h2>

  <!--template reference variables -->
  <h1 [style.color]="titleColor">**template reference variables**</h1>
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button>
  <br>

  <input #myOtherInput type="text" value="refer to entire variable">
  <button (click)="logMessage(myOtherInput)">click for element</button>


  <br>
  <!-- ** two way binding ** -->
  <h1 [style.color]="titleColor">** Two Way binding **</h1>
  <h2> type something to see 2 way binding</h2>
  <input [(ngModel)]="name2" type="text">
  <h2>{{name2}}</h2>
  <br>
  <!--Structural Directives -->
  <h1 [style.color]="titleColor">** Structural Directives **</h1>






  `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style:italic;
    }

    `]
})
export class TestComponent implements OnInit {

  public name = "Evie Zouras";
  public name2="";
  public greeting="";//set greeting by clicking.
  public onTheFly="";
  public siteURL=window.location.href;
  public myId="testId" //property binding
  public isDisabled=false;//will be disabled = true.
  public successClass="text-success";
  public hasError=false;// if this is true, the style class will be applied.
  public isSpecial=true;
  public messageClasses={
    "text-success": !this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  public titleStyles={
    color:"aqua",
    fontStyle:"italic"
  }
  public eventBindStyle={
    color:"maroon"
  }
  public eventBindColor="lime";
  public highlightColor="yellow";
  public titleColor="navy";


  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }
  iWillClick(event){
    console.log("you clicked on the button and it is event binding!");
    console.log("event is: ",event)

  }
  clickAgain(event){
    this.greeting = event.type;
  }
  logMessage(inputValue){
    console.log(inputValue);
  }
}
