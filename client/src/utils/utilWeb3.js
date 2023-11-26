/*import Web3 from "web3"; // Importing the Web3 library

// Function to handle Web3 setup and initialization
const utilWeb3 = () =>
  new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        // Initialize Web3 with the injected Ethereum provider
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();
          // Accounts now exposed
          resolve(web3); // Resolve the promise with initialized Web3 object
        } catch (error) {
          reject(error); // Reject the promise if there's an error during enable
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3; // Initialize Web3 with the injected provider
        console.log("Injected web3 detected.");
        resolve(web3); // Resolve the promise with initialized Web3 object
      }
      // Fallback to localhost; use dev console port by default...
      else {
        // Set up Web3 with a local provider if no injected provider is found
        const provider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:7545"
        );
        const web3 = new Web3(provider); // Initialize Web3 with the local provider
        console.log("No web3 instance injected, using Local web3.");
        resolve(web3); // Resolve the promise with initialized Web3 object
      }
    });
  });

export default utilWeb3; // Exporting the utilWeb3 function as default*/

import Web3 from "web3"; // Importing the Web3 library

// Function to handle Web3 setup and initialization
const utilWeb3 = () =>
  new Promise((resolve, reject) => {
    // Wait for DOM content to load before executing
    document.addEventListener("DOMContentLoaded", async () => {
      let web3;

      if (window.web3) {
        // Legacy dapp browsers...
        web3 = window.web3; // Use Mist/MetaMask's provider.
      } else if (window.ethereum) {
        // Modern dapp browsers...
        web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable(); // Request account access if needed
        } catch (error) {
          reject(error); // Reject if account access is not granted
          return;
        }
      } else {
        // Fallback to localhost; use dev console port by default...
        const provider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:7545"
        );
        web3 = new Web3(provider); // Use a local provider if no injected provider is found
      }

      resolve(web3); // Resolve the promise with initialized Web3 object
    });
  });

export default utilWeb3; // Exporting the utilWeb3 function as default
