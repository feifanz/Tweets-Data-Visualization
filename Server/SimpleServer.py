from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)


class View1(Resource):
    def get(self):
        return {'hello': 'world'}

class View2(Resource):
    def get(self):
        return {'hello2': 'world2'}

api.add_resource(View1, '/api/view1')
api.add_resource(View2, '/api/view2')


if __name__ == '__main__':
    app.run(debug=True)