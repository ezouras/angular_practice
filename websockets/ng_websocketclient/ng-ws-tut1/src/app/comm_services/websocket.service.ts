import {Observable, Observer} from 'rxjs';

export class WebsocketService{
	ws: WebSocket;
	socketIsOpen = 1; //websocket is open 

	createObservableSocket(url:string):Observable<any>{
		this.ws = new WebSocket(url);

		return new Observable(
			observer=>{
				this.ws.onmessage = (event) => observer.next(event.data);
				this.ws.onerror = (event) => observer.error(event);
				this.ws.onclose = (event) => observer.complete();

				//a callback invoked on unsubscribe()
				return() => this.ws.close(1000,"the user disconnected");
			}
			);

	}

	sendMessage(message:string): string{
		if(this.ws.readyState===this.socketIsOpen){
			this.ws.send(message);
			return `Sent to server ${message}`;
			//return(`I received message ${message}`);
		}
			return `Message was not sent - the socket is closed`;
		
		}
}