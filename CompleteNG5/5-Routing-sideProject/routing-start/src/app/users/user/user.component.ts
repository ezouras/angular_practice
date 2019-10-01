import { Component, OnInit,OnDestroy } from '@angular/core';
import{ActivatedRoute,Params}from '@angular/router';
import{Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private currentRoute:ActivatedRoute) {
  //by injecting this we have access to thecurrent route.
}

  ngOnInit() {
    this.user={
      id:this.currentRoute.snapshot.params['id'],//we defined a /user/:id route.
      name:this.currentRoute.snapshot.params['name']//user/:id/:name -  2 dynamic pieces.
//this works only for the first initialzion. if you have a link on the html that
//changes the data, and the id and name, this doesn't run again.  changing a link o the same
//component doesn't reload the component if your already on that component.
    }


    //how to changed if the route changed and data needs to change.
    //use AN OBSERVABLE.  params is an observalbe.
    this.paramsSubscription=this.currentRoute.params
      .subscribe((updatedP:Params)=>{
        this.user.id=updatedP["id"];
        this.user.name=updatedP["name"];
      });

  }
  ngOnDestroy(){
    this.paramsSubscription.unsubscribe;

  }

}
