import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class WsConnService {

  private websocket_subject:Subject<any>;

  constructor() { }

  public getWebsocketServiceSubject():Subject<any>{
  if(!this.websocket_subject)
  {
    try{
      this.websocket_subject = webSocket("ws://localhost:10001");
    }
    catch(error){
      console.log("could not connect to websocket. failed with error: ",error)
      return error;
    }


  }

 console.log("in ws conn service and returning the websocket subject ",this.websocket_subject)
  return this.websocket_subject;
  }
}
