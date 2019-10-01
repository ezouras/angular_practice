import { Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Subject}from 'rxjs/Subject';

import {T3DataService} from '../../models/t3-data-service.model';
import {SvcForStyle1Service} from '../svc-for-style1.service';



@Component({
  selector: 'app-style1',
  templateUrl: './style1.component.html',
  styleUrls: ['./style1.component.css']
})
export class Style1Component implements OnInit {
  private t3services:T3DataService[];
  private t3serviceUpdateSubscription:Subscription;
  private t3serviceInitialServicesSubscription:Subscription;


  constructor(private t3dataservice:SvcForStyle1Service) {
    console.log("in style1 component constructor");
    //console.log("t3 services are: ",this.t3services)
  }

  ngOnInit() {
    console.log("in style1 component ngOnInit")
    this.t3serviceInitialServicesSubscription=this.t3dataservice.getInitialServicesSubject().
      subscribe((initialServices)=>{
        this.t3services=initialServices;
    });
    this.t3serviceUpdateSubscription=this.t3dataservice.getServiceUpdateSubject().
     subscribe((updatedServices)=>{
        this.t3services=updatedServices;
      })
  }

  ngOnDestroy(){
    this.t3serviceUpdateSubscription.unsubscribe();
    this.t3serviceInitialServicesSubscription.unsubscribe();

  }

}
