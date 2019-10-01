const express = require("express");
const path =require("path");
const ws =  require("ws");

const app = express();
let i=0;

//http server
app.get("/",(req,res)=>
	res.sendfile(path.join(__dirname,'plain_js_websocket.html')));

const httpServer=app.listen(8000,"localhost",()=>{
	const{port} = httpServer.address();
	console.log(`http server is listening on ${port}`);
});

//websocket server 
const wsServer = new ws.Server({port:8085});
console.log("websocket server is listening on port 8085");

/* code for "plain_js_websocket.html"
wsServer.on("connection",wsClient=>setInterval(myBroadcast, 1500, wsClient));


function myBroadcast(wsClient) {
	console.log("...getting ready to broadcast , i is ",i++);
  wsClient.send(`Broadcasting message ${i}`);
  wsClient.onerror=(error)=>{
				console.log(`the server received: ${error['code']}`);
			}
}

*/

/* code for angular ng_websocketclient */
wsServer.broadcast = function broadcast(data) {
  wsServer.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wsServer.on('connection', function connection(ws) {
  wsServer.on('message', function incoming(data) {
    // Broadcast to everyone else.
    wsServer.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});

/*
wsServer.on('connection',
	websocket => {
		websocket.send("hello from the two -way websocket server");
		websocket.onmessage = message => {
			let messageToSendBack=message['data'];
			console.log(`server received message ${messageToSendBack}`);
			sendMessageToClient(websocket,messageToSendBack);
		}
		websocket.onerror = error => console.log("the error from the server is",error['code']);
		websocket.onclose = why => console.log(`the server received ${why.code} for ${why.reason}`);

	});

function sendMessageToClient(websocket,message){
	websocket.send(message);
}
*/



	
	
