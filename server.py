from flask import Flask,request

app = Flask(__name__)


@app.route("/calculator/greeting", methods=['GET'])
def greeting():
    return 'Hello world!'

@app.route("/calculator/add", methods=['POST'])
def add():
    data = request.json
    f=data['first']
    s=data['second']
    res={'res':f+s}
    return res

@app.route("/calculator/subtract", methods=['POST'])
def subtract():
    data = request.json
    f=data['first']
    s=data['second']
    res={'res':f-s}
    return res

if __name__ == '__main__':
    app.run(port=8080,host='0.0.0.0')
