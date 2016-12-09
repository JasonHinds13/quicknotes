from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/login')
def login():
    return render_template("frags/login.html")

@app.route('/signup')
def signup():
    return render_template("frags/signup.html")

@app.route('/MakeNotes')
def makenotes():
    return render_template("frags/MakeNotes.html")

@app.route('/ViewNotes')
def viewnotes():
    return render_template("frags/ViewNotes.html")

if __name__ == "__main__":
    app.run(host='0.0.0.0')