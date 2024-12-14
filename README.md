# Extension to Setect and sandbox Malicious link Automatically

This Repository contains browser extension to automatically detect and open threats and malicious links in a sandboxed browser which is destroyed once the page is closed

#### This uses a Firefox Docker to Sandbox URL's and a light python server to initiate and kill the docker environment 

## Requirments
- Python 3.10+
- Flask (pip module)
- Docker (Setup and running)
- Firefox Docker 

## Installation 

### Docker Sandbox Environment 

- Start the python server by running the sandbox/app.py
```
# Linux / MacOS
python3 sandbox/app.py

# Windows
python sandbox/app.py
```

### Extension Setup

- Navigate to Browser Settings > Extensions
  - Turn on Developer Mode
  - Click on LOAD UNPACKED and select /extension folder 
  - Pin the extension to view page stats

Now all threat links will be automatically opened in a sandboxed page

## Environment

- Update API KEYS in the config file
#### SAMPLE CONFIG
```
const CONFIG = {
  API_KEY: "AIxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  API_URL: "https://safebrowsing.googleapis.com/v4/threatMatches:find",
};
```

### Platforms Supported
-  Technically all platforms with docker support
- #### Tested on Debian 12 x86 with Python 3.11

## Contributions

Feel free to Fork and modify and improve the functionality
Even a UI update is Appreciated

## Credits 

Thanks to jlesage for Firefox Docker image
