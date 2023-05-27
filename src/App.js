import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import MetaMaskButton from './Component/Button';
import ContractData from './Component/ContractAddress';

function App() {
  

    
  // 0x398d141b27c47e4ffa2adcafe4216b120e73b149

  return (
    <div className="App">
     <MetaMaskButton></MetaMaskButton>
     <ContractData></ContractData>
    </div>
  );
}

export default App;
