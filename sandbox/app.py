from flask import Flask
import subprocess

app = Flask(__name__)

@app.route('/initialize-docker/<URL>')
def UrlToDocker(URL):
    try:
        command = [
            "docker", "run", "-d", "--name=firefox",
            "-p", "5800:5800",
            "-v", "/docker/appdata/firefox:/config:rw",
            "-e", f"FF_OPEN_URL={URL}",
            "jlesage/firefox"
        ]
        result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        
        output = f"STDOUT:\n{result.stdout}\n\nSTDERR:\n{result.stderr}"
    except Exception as e:
        output = f"Error occurred: {str(e)}"
    
    return output

@app.route('/stop-sandbox')
def DockerShutdown():
    try:
        DStop = [
            "docker", "stop", "firefox",
        ]
        DRemove = [
            "docker", "rm", "firefox"
        ]
        StopStatus = subprocess.run(DStop, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        RemoveStatus = subprocess.run(DRemove, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

        StopOutput = f"STDOUT:\n{StopStatus.stdout}\n\nSTDERR:\n{StopStatus.stderr}"
        RemoveOutput = f"STDOUT:\n{RemoveStatus.stdout}\n\nSTDERR:\n{RemoveStatus.stderr}"
    except Exception as e:
        output = f"Error occurred: {str(e)}"
    
    return StopOutput,RemoveOutput
if __name__ == '__main__':
    app.run(debug=True, port=5900)
