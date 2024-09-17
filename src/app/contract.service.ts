import { Injectable } from '@angular/core';
import Web3 from 'web3';


@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private web3: Web3;
  // Dummy contract address (ERC-20 token contract on Ethereum)
  private contractAddress = '0x56D1E125558137773521D1cCc28b6f5590057E8c';  
  // Dummy ABI for an ERC-20 token contract
  private abi = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "type": "function"
    }
  ];
  private contract: any;

  constructor() { 
    this.web3 = new Web3('https://ropsten.infura.io/v3/1234567890abcdef1234567890abcdef'); // Replace with your Infura Ropsten project ID
    this.contract = new this.web3.eth.Contract(this.abi, this.contractAddress);
  }


  async getBalance(address: string) {
    try {
      const balance = await this.contract.methods.balanceOf(address).call();
      console.log('Balance:', balance);
      return this.web3.utils.fromWei(balance, 'ether');

    } catch (error) {
      console.error('Error getting balance:', error);
      throw error;
    }
  }
  
}
