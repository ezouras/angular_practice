from flask import Flask,request
from flask_restful import Resource, Api

app = Flask(__name__) # run flask, pass it THIS
api =Api(app)

class hiworld(Resource):
	def get(self):
		return {"hi":"there"}

api.add_resource(hiworld,"/") #what to do at the "/" route

if __name__ == "__main__":
	app.run(debug=True)

'''
Try wit this app from a command line:
curl http://127.0.0.1:5000/

