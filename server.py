from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import time 

app = Flask(__name__)
CORS(app)

# API POST QUE RECEBE MENSAGENS DO CLIENTE
@app.route('/api/send', methods=['POST'])
def get_message():

	data = request.get_json()
	message = data.get('message')
	
	if message == "" or message == " ":
		return jsonify({"response": "null message"}), 400
	
	mydb = sqlite3.connect("database.db")
	
	cursor = mydb.cursor()

	cursor.execute("INSERT INTO messages (message) VALUES (?)",(message,))
	mydb.commit()
	cursor.close()
	mydb.close()
	

	return jsonify({"response": "OK"}), 200

# API GET QUE VAI PEGAR A PALVRA DO DIA
@app.route('/api/theword', methods=['GET'])
def give_theword():
	
	return jsonify({"response": "oie"}), 200


# API PARA DISTRIBUIR AS PALAVRAS
@app.route('/api/see', methods=['GET'])
def read_db():
	connection = sqlite3.connect("database.db")
	cur = connection.cursor()
	cur.execute("SELECT id, message FROM messages ORDER BY id DESC LIMIT 5")
	row = cur.fetchall()

	cur.close()
	connection.close()
	if not row:
		return jsonify([]), 500

	
	
	
	toreturn = [{"id": r[0], "message": r[1]} for r in row[::-1]]
	return jsonify(toreturn)

@app.route('/api/like', methods=['POST'])
def like():

	data = request.get_json()
	message_id = data.get('message_id')

	mydb = sqlite3.connect("database.db")
	cur = mydb.cursor()

	cur.execute("SELECT MAX(id) FROM messages")
	max_id = cur.fetchone()[0]

	if message_id > max_id or max_id - message_id > 4:
		mydb.close()
		cur.close()
		return jsonify({"response": "Invalid id"}), 400
	
	cur.execute("UPDATE messages SET likes = likes +1 WHERE id = ?",(message_id,))
	mydb.commit()
	mydb.close()
	cur.close()

	return jsonify({"response": "1 like added"}), 200

if __name__ == '__main__':
    app.run(port = 9834, debug=True, host="0.0.0.0")
