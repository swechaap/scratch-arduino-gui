# Scratch Arduino
[![](https://github.com/OttawaSTEM/scratch-arduino-gui/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/OttawaSTEM/scratch-arduino-gui/actions/workflows/release.yml)
![](https://img.shields.io/github/license/ottawastem/scratch-arduino-gui)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate?business=X555FJZS5QCMA&no_recurring=0&item_name=Scratch+Arduino&currency_code=USD)

### Scratch Arduino is Scratch 3.0 with Arduino and Arduino Robot Extensions.
Arduino programming hasn't been easy, but using Scratch to program Arduino, it is more fun and simple than ever before!
* **Interactive Mode** - Connect sprites with Arudino Robots or Arduino Boards, and use them to interact with Arduino Robots or Arduino Boards
* **Program Mode** - Use Scratch to program Arudino Robots or Arduino Boards, and run them offline

## Using Scratch Arduino
1. Download and install [Scratch Arduino Link](https://github.com/OttawaSTEM/scratch-arduino-link/releases/latest/)

2. Start the "Scratch Arudino Link" application  
    <img src="docs/scratch-arduino-link.png" width="200px" height="auto"/>  

3. Scratch Arduino: [https://scratch.ottawastem.com](https://scratch.ottawastem.com)  
    **Interactive Mode:**
    <img src="docs/screenshoot-interactive.png"/>  
    
    **Program Mode:**
    <img src="docs/screenshoot-program.png"/>


## Starting the Server
To start the Scratch Arduino server locally, follow these steps:

1. Clone or download the Scratch Arduino repository from GitHub to your local machine.
2. Navigate to the root directory of the project in your terminal/command prompt.
3. Install the necessary dependencies by running `npm install` if you haven't already done so Note: use node version 14 only.
4. Start the server by running the command `npm start`.
5. Once the server is running, you should see output indicating that the server is listening on a specific port, usually port 3000 by default.
6. Open your web browser and navigate to the URL where the Scratch Arduino server is hosted, typically `http://0.0.0.0:8601/`.
7. You should now be able to use Scratch Arduino in both interactive and program modes.

These steps assume you have Node.js and npm installed on your machine. If not, you'll need to install them before proceeding. Additionally, make sure to follow any specific instructions or prerequisites mentioned in the project's documentation.
