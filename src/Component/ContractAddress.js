import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers/dist/ethers.esm.js';
import detectEthereumProvider from '@metamask/detect-provider';

const ContractData = () => {
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contractAddress = '0x398d141b27c47e4ffa2adcafe4216b120e73b149';
        const contractABI = [
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "newMessage",
                "type": "string"
              }
            ],
            "name": "setMessage",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getMessage",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          }
        ];

        const provider = await detectEthereumProvider();
        await provider.request({ method: 'eth_requestAccounts' });

        // const ethersProvider = new ethers.providers.Web3Provider(provider.getProvider());
        const ethersProvider = new ethers.providers.Web3Provider(provider);
        const contract = new ethers.Contract(contractAddress, contractABI, ethersProvider);

        const retrievedMessage = await contract.getMessage();
        setMessage(retrievedMessage);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const contractAddress = '0x398d141b27c47e4ffa2adcafe4216b120e73b149';
      const contractABI = [
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "newMessage",
              "type": "string"
            }
          ],
          "name": "setMessage",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getMessage",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ];

      const provider = await detectEthereumProvider();
      await provider.request({ method: 'eth_requestAccounts' });

    //   const ethersProvider = new ethers.providers.Web3Provider(provider.getProvider());
    const ethersProvider = new ethers.providers.Web3Provider(provider);
      const signer = ethersProvider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      await contract.setMessage(inputValue);

      const updatedMessage = await contract.getMessage();
      setMessage(updatedMessage);

      setInputValue('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Contract Data</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new message"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ContractData;
