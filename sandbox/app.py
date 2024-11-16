from flask import Flask, render_template
import os
app = Flask(__name__)

@app.route('/initialize-docker')
def home():
    os.system('docker run -d     --name=firefox     -p 5800:5800     -v /docker/appdata/firefox:/config:rw     jlesage/firefox ')
    return ' hello'

if __name__ == '__main__':
    app.run(debug=True,port=5900)
