from flask import Flask
from flask_socketio import SocketIO, send

app = Flask(__name__)
app.config["SECRET_KEY"]="mysecret"
socketio = SocketIO(app)
#defaults to port 5000

@socketio.on('message') # gets called anytime there is a message
def handleMessage(msg):
	print("Message" + msg)
	#broadcast message to anyone connected
	send(msg, broadcast=True)#defaults to sending message back
	#to whoever sent it to begin with.  

if __name__== '__main__':
	socketio.run(app)