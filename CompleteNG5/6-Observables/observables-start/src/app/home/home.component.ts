import { Component, OnInit,OnDestroy } from '@angular/core';
//import {Observable} from 'rxjs/Observable';
//import {Observer} from "rxjs/Observer";
import{Observable,Observer,Subscription,interval} from 'rxjs';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  myNumberCountSubscription:Subscription;
  myPackageDeliverySubscription:Subscription;


  constructor() { }

  ngOnInit() {
    //automatically send data every second
    //chain an operator. an operator can be used on
    //any observable.

    //const myNumbers = Observable.interval(1000)
    const myNumbers = interval(1000)
        .pipe(map((data)=>{
                return data*2;
                //behind the scenes, rxjs will turn the
                //data ito a new number.
              }));


    //three callbacks to pass. when you get data. when you
  //get an error. when it comletes.
  //* note that this happens on the HOME page, but even
  //if you switch pages, it will still count(click on user1 or user2)
    this.myNumberCountSubscription=myNumbers.subscribe(
      (aNum:number)=>{
          console.log(aNum);
      }
    )
    const myObs=Observable.create((observ:Observer<string>)=>{
      //this is the function that will make up the
      //Observer
      setTimeout(()=>{
        observ.next("first package");//pushes the next data package.
      },2000);
      setTimeout(()=>{
        observ.next("second package");//pushes the next data package.
      },4000);
      setTimeout(()=>{
        observ.complete();//pushes the next data package.
      },5000);
      setTimeout(()=>{
        observ.next("ccan you see me?");//pushes the next data package.
      },6000);


    });

    this.myPackageDeliverySubscription=myObs.subscribe(
      (data:string)=>{//triggered when data delivered
       console.log(data);
      },
      (error:string)=>{
        console.log(error);
      },
      ()=>{console.log("Completed")
      }
    );
  }
  ngOnDestroy(){
    this.myPackageDeliverySubscription.unsubscribe();
    this.myNumberCountSubscription.unsubscribe();

  }

}
