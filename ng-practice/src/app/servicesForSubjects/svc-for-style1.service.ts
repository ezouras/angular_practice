import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {T3DataService} from '../models/t3-data-service.model';
import{WsCentralHubService} from './ws-central-hub.service';


@Injectable({
  providedIn: 'root'
})
export class SvcForStyle1Service {
  private t3services:Array<T3DataService>=[];
  private t3ServicesUpdateSubject=new Subject<any>();
  private t3ServicesInitialObjectsSubject=new Subject<any>();


  constructor(t3RawObjectsService:WsCentralHubService) {
    console.log("in svc for style1 service constructor")
    t3RawObjectsService.getInitialObjects().subscribe(
      (data)=>{
        console.log("recieved initial objects")
        this.setInitialT3DataServiceObjects(data);
      });

      t3RawObjectsService.getSingleServiceUpdateSubject().subscribe(
        (service)=>{
          console.log("received single object");
          this.updateSingleServiceObject(service);
        }
      );
  }

  public getT3DataServiceObjects(){
    return this.t3services.slice();
  }

  public updateSingleServiceObject(service){
    this.t3services.forEach((serviceObj,index)=>{
      if(serviceObj.id==service.id){
        this.t3services[index]=this.createT3DataService(service);
        this.t3ServicesUpdateSubject.next(this.t3services.slice());
        return;
      }
    });
      console.log("couldn't find updated service. ")
      return;

  }
  private setInitialT3DataServiceObjects(data){
    console.log("setting t3 objects");
    data.forEach((value)=>{
      this.t3services.push(this.createT3DataService(value));
    })
    this.t3ServicesInitialObjectsSubject.next(this.t3services.slice());
  }

  private createT3DataService(serviceObj){
    return new T3DataService(serviceObj.id,serviceObj.service_name,serviceObj.status);

  }

  public getServiceUpdateSubject(){
    return this.t3ServicesUpdateSubject;
  }
  public getInitialServicesSubject(){
    return this.t3ServicesInitialObjectsSubject;
  }
}
