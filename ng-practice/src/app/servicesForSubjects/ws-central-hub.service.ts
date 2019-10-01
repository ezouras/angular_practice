import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

import{WsConnService} from './ws-conn.service';

@Injectable({
  providedIn: 'root'
})
export class WsCentralHubService{
  private single_service_change=new Subject<any>();
  private initial_services_received=new Subject<any>();


  constructor(private ws_conn:WsConnService ){
    console.log("in central hub constructor")
      ws_conn.getWebsocketServiceSubject().subscribe(
      (data)=>{
        console.log("websocket update!")
        if(data.isInitialData){
          console.log("is initial data")
          this.initial_services_received.next(JSON.parse(data["msg"]));
        }
        else
        {
          console.log("is single service update")
          this.single_service_change.next(JSON.parse(data["msg"]));
        }

      },
      (error)=>{
        console.log("could not get t3 data from server");
        console.log(error);
      });
  }

  public getSingleServiceUpdateSubject(){
    return this.single_service_change;
  }

  public getInitialObjects(){
    return this.initial_services_received;
  }
}
