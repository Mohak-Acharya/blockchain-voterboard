const path = require('path'); // Import the 'path' module from Node.js

module.exports = {
  contracts_build_directory: path.join(__dirname, 'client/src/contracts'), // Define the build directory for compiled contracts

  networks: {
    development: { // Configuration for the development network
      host: '127.0.0.1', // Host where the blockchain is running (localhost)
      port: 7545, // Port number for the blockchain (Ganache or local blockchain)
      network_id: '*', // Network ID (can be any value for development purposes)
    },
  },

  compilers: {
    solc: {
      version: '0.8.14', // Specify the version of the Solidity compiler to be used (Solidity version)
    },
  },

  mocha: {
    // Additional configurations for Mocha testing framework can be added here if needed
  },
};
