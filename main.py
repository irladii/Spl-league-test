from flask import Flask
from flask_cors import CORS
import os
from routes import register_routes
import database

app = Flask(__name__)
CORS(app)
database.init_db()
register_routes(app)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
