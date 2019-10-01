import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import{IEmployee}from'./employee';
import{Observable}from 'rxjs/Observable';
import{catchError}from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

//the above defaults to node_modules folder


@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }
  private _url: string ="/assets/data/employees.json"

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
                    .pipe(
                      catchError(this.errorHandler)
                    );
    //we are going to assume the webserver is a file of data.
    //Iemployee is an object. create an array of
    //these objects.

    //returned is an observalbe. it si cast into an IEmploeey array.

  }
  private errorHandler(){
      return "Server Error";


  }

}
