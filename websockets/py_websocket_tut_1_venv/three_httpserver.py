from flask import Flask,request;
from flask_restful import Api,Resource

app = Flask(__name__)
api = Api(app)

todos = {}

class makesureiwork(Resource):
	def get(self):
		return "hi! I work!"

class TodoSimple(Resource):
	def get(self,todo_id): # what to return when the route is /todo_id
		return {todo_id: todos[todo_id]}

	def put(self, todo_id):
		todos[todo_id] = request.form['data']
		return {todo_id: todos[todo_id]}

api.add_resource(makesureiwork,'/')
api.add_resource(TodoSimple,'/<string:todo_id>')

if __name__==("__main__"):
	app.run(debug=True)

'''
make sure it works:
curl http://127.0.0.1:5000  -> does it say hi?

curl http://127.0.0.1:5000/todo1 -d "data = remember the silk" -X PUT
'''
