import React, { useState } from 'react';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';

const MetaMaskButton = () => {
  const [walletAddress, setWalletAddress] = useState('');

  const connectToMetaMask = async () => {
    try {
      const provider = await detectEthereumProvider();

      if (provider) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const address = accounts[0];
        setWalletAddress(address);
      } else {
        console.error('MetaMask not found');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Connect with MetaMask</h1>
      <button onClick={connectToMetaMask}>
        {walletAddress ? ` ${walletAddress.length>5 ? walletAddress.slice(0,10) : walletAddress} ` : 'Connect'}
      </button>
    </div>
  );
};

export default MetaMaskButton;
