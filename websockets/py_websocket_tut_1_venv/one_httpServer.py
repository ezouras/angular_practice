from flask import Flask 

app = Flask(__name__)

@app.route("/")
def hello():
	return "the flask webserver is running!"


@app.route("/eviezouras")
def doesThisNameMatter():
	return "hi, my name is evie zouras"



if __name__=="__main__":
	app.run(port=5002)