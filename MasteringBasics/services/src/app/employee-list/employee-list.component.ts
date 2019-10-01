import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service'

@Component({
  selector: 'employee-list',
  template: `
  <h2>Employee List</h2>
  <h3>{{errorMsg}}</h3>
  <ul *ngFor="let employee of employees">
    <li>{{employee.name}}</li>
  </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees=[];
  public errorMsg;


  constructor(private _employeeService: EmployeeService) {
    //a private variable is created and it is an
    //instance of the class "EmplyeeService"
   }

  ngOnInit() {
      //this.employees=this._employeeService.getEmployees();
      this._employeeService.getEmployees()//this methd returns an observable.
      .subscribe(data=>this.employees=data,
                  error=>this.errorMsg=error);
      //to receive the observable that is returend from getEmployees,
      //you need to subscribe.

      //two callbacks. one for success, one for the error. 

  }

}
