# Scratch Arduino Setup

This repository contains the Scratch Arduino server setup and usage instructions.

## Requirements

### Using Scratch Arduino

1. Download and install [Scratch Arduino Link](https://github.com/ChaitanyaSeesala/scratch-arduino-link/releases).By downloading form the assests.

2. Install and start the "Scratch Arduino Link" application


3. Access Scratch Arduino: [http://65.108.155.62:8601/](http://65.108.155.62:8601/)




## Installing NVM

### Windows

To install NVM on Windows, follow these steps:

1. **Download NVM for Windows:**
   - Go to the [NVM for Windows GitHub releases page](https://github.com/coreybutler/nvm-windows/releases).
   - Download the latest version of the `nvm-setup.zip` file.

2. **Install NVM:**
   - Extract the downloaded zip file.
   - Run the `nvm-setup.exe` file to start the installation process.
   - Follow the installation instructions. You can use the default settings.

3. **Configure NVM:**
   - Open Command Prompt or PowerShell as an administrator.
   - Verify the installation by running:
     ```sh
     nvm version
     ```

4. **Install Node.js using NVM:**
   - Install Node.js version 14 by running:
     ```sh
     nvm install 14
     ```
   - Use Node.js version 14:
     ```sh
     nvm use 14
     ```
   - Verify the Node.js installation:
     ```sh
     node -v
     npm -v
     ```

### Linux

To install NVM on Linux, follow these steps:

1. **Install NVM:**
   - Open a terminal and run the following command to download and install NVM:
     ```sh
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
     ```
   - This will download and run the NVM installation script. It might take a few minutes to complete.

2. **Configure NVM:**
   - After the installation script completes, you'll need to add NVM to your shell profile. Add the following lines to your `~/.bashrc`, `~/.zshrc`, or `~/.profile` file, depending on your shell:
     ```sh
     export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
     [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
     ```
   - To apply the changes, run:
     ```sh
     source ~/.bashrc
     ```

3. **Install Node.js using NVM:**
   - Install Node.js version 14 by running:
     ```sh
     nvm install 14
     ```
   - Use Node.js version 14:
     ```sh
     nvm use 14
     ```
   - Verify the Node.js installation:
     ```sh
     node -v
     npm -v
     ```


### Starting the Server

To start the Scratch Arduino server locally, follow these steps:

1. Clone or download the Scratch Arduino repository from GitHub to your local machine.
2. Navigate to the root directory of the project in your terminal/command prompt.
3. Install the necessary dependencies by running `npm install` if you haven't already done so. Note: use Node.js version 14 only.
4. Start the server by running the command `npm start`.
5. Once the server is running, you should see output indicating that the server is listening on a specific port, usually port 3000 by default.
6. Open your web browser and navigate to the URL where the Scratch Arduino server is hosted, typically `http://0.0.0.0:8601/`.
7. You should now be able to use Scratch Arduino in both interactive and program modes.

These steps assume you have Node.js and npm installed on your machine. If not, you'll need to install them before proceeding. Additionally, make sure to follow any specific instructions or prerequisites mentioned in the project's documentation.



