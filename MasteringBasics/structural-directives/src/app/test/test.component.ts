import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h1>I work!</h1>
  <!-- ngIf -->
  <h1 [style.color]="titleColor">*** ngIf ***</h1>
  <h2 *ngIf="true">conditional true ngif tag</h2>
  <h2 *ngIf="false">conditional false ngif tag</h2>
  <h2 *ngIf="displayName">based on js property </h2>
  <h2 [style.color]="subTitle"> using if else block </h2>
  <h2 *ngIf="displayName2; else displayName2ElseBlock">display if true</h2>
  <ng-template #displayName2ElseBlock>
  <h2> Display if false in if else block</h2>
  </ng-template>

  <h2 [style.color]="subtitle">if then else block example</h2>
  <div *ngIf="displayName2;then thenBlock;else elseBlock"></div>
  <!-- if true, use the then block.  if false use the else block-->

  <ng-template #thenBlock>
    <h2> In then block </h2>
  </ng-template>
  <ng-template #elseBlock>
    <h2> In the ELSE block</h2>
  </ng-template>

  <h1 [style.color]="titleColor">*** ngSwitch***</h1>
  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked the color red</div>
    <div *ngSwitchCase="'blue'">You picked the color blue</div>
    <div *ngSwitchCase="'green'">You picked the color green</div>
    <div *ngSwitchDefault>Pick again</div>
  </div>

    <h1 [style.color]="titleColor">*** ngFor***</h1>
    <div *ngFor="let color of colors"><!--color represents each value in the array-->
      <h2>{{color}}</h2><!-- a new tag is created for each color -->
    </div>
    <h2 [style.color]="subTitle">Using index along with a value</h2>
    <div *ngFor="let color of colors;index as j"><!--color represents each value in the array-->
      <h2>{{j+1}}:{{color}}</h2><!-- a new tag is created for each color -->
    </div>
    <h2 [style.color]="subTitle">Other variables ot be used with ngFor</h2>
    <h2> first true </h2>
    <div *ngFor="let color of colors;index as j;first as f"><!--color represents each value in the array-->
      <h2>{{j+1}}:{{f}}:{{color}}</h2><!-- a new tag is created for each color -->
    </div>
    <h2 [style.color]="subsubTitle"> last true</h2>
    <div *ngFor="let color of colors;index as j;last as l"><!--color represents each value in the array-->
      <h2>{{j+1}}:{{l}}:{{color}}</h2><!-- a new tag is created for each color -->
    </div>
    <h2 [style.color]="subsubTitle"> Odd and Even </h2>
    <div *ngFor="let color of colors;index as j;odd as o;even as e"><!--color represents each value in the array-->
      <h2>{{j+1}}:{{e}}:{{color}}</h2><!-- a new tag is created for each color -->
    </div>


  `,
  styles: []
})
export class TestComponent implements OnInit {

  public titleColor="navy";
  public subTitle="teal";
  public subsubTitle="pink"
  public displayName=true;
  public displayName2=false;
  public color="orange";
  public colors=["red","blue","green","yellow"];


  constructor() { }

  ngOnInit() {
  }

}
