from flask import Flask
import os

# creates a Flask application, named app
app = Flask(__name__)

# a route where we will display a welcome message via an HTML template
@app.route("/")
def hello():  
    message = "Hello, World"
    return message

# run the application
if __name__ == "__main__":  
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
