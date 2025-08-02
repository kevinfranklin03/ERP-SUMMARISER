# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from summariser import generate_summary
from file_parser import extract_text_from_file
from werkzeug.utils import secure_filename
import tempfile

app = Flask(__name__)
CORS(app)

@app.route("/api/summarise", methods=["POST"])
def summarise_text():
    data = request.json
    text = data.get("text", "")
    summary, fields = generate_summary(text)
    return jsonify({"summary": summary, "fields": fields})

@app.route("/api/summarise-file", methods=["POST"])
def summarise_file():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    filename = secure_filename(file.filename)

    with tempfile.NamedTemporaryFile(delete=False) as tmp:
        file.save(tmp.name)
        text = extract_text_from_file(tmp.name, filename)

    summary, fields = generate_summary(text)
    return jsonify({"summary": summary, "fields": fields})

if __name__ == "__main__":
    app.run(debug=True)
