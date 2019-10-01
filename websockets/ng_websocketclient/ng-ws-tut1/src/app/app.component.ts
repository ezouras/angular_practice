import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import {Observable} from 'rxjs/Observable';
import { WebsocketService} from './comm_services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Websocket Tutorial';
  status:string;
  messageFromServer:string;
  //wsObservable:Observable;
  wsSubscription:Subscription;

  constructor(private wsServer:WebsocketService){
  	/*this.wsSubscription=wsServer.createObservableSocket("ws://localhost:8085");
  	.subscribe(
  		data=>this.messageFromServer=data,
  		err=>console.log("websocket error ",err),
  		()=>console.log("observable stream is complete")
  		);
  		*/
  };

  ngOnInit(){
  	this.wsSubscription=this.wsServer.createObservableSocket("ws://localhost:8085")
  	.subscribe(
  		data=>this.messageFromServer=data,
  		err=>console.log("websocket error ",err),
  		()=>console.log("observable stream is complete")
  		);
  }

  sendMessageToServer(message:string){
  	this.status=this.wsServer.sendMessage(message);
  	console.log("status of sending message to server is ",this.status);

  }

  closeSocket(){
  	this.wsSubscription.unsubscribe();
  	this.status="socket is closed";
  }

  ngOnDestroy(){
  	this.closeSocket;

  }
}
