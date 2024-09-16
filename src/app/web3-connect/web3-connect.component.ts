import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../service/web3.service';
import { CommonModule } from '@angular/common';
import detectEthereumProvider from '@metamask/detect-provider';



@Component({
  selector: 'app-web3-connect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web3-connect.component.html',
  styleUrl: './web3-connect.component.css'
})
export class Web3ConnectComponent implements OnInit {

 public address:string |undefined|null=null;

  constructor(private web3Service: Web3Service){}

  // Connect wallet
  async connectWallet(){
    try{
      this.address =await this.web3Service.connectWallet();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  }

  //disconnect wallet
  disconnectWallet(){
    this.web3Service.disconnect();
    this.address =null;
  }


  walletAvaiable =false;
  connectedAccount: string | null = null;
  async ngOnInit() {
    const provider = await detectEthereumProvider();
    console.log("provider",provider)

    if(provider) {
      this.walletAvaiable = true;
      console.log("wallect provider",this.walletAvaiable)
      // Listen for account changes
      window.ethereum.on('accountsChanged',(account:string[])=>{
        if(account.length == 0) {
          this.connectedAccount = null; // No account connected

        } else {
          this.connectedAccount = account[0]; // New account selected

        }
      })

      window.ethereum.on('chainChanged',(chainId:string)=>{
        console.log("Network changed:",chainId);
        window.location.reload();// Reload the app when the network changes
      })
    }
  }
  
  async walletConnection(){
    
    if(window.ethereum) {
      try{
        const account = await window.ethereum.request({
          method:'eth_requestAccounts'
        })

        console.log("account:",account)
        this.connectedAccount = account[0];
        console.log('Connected account:', this.connectedAccount);

      }catch(error){
         console.error('User denied the connection request');
      }
    }
  }

  walletDisconnect(){
    this.connectedAccount = null
    console.log("wallet disconnected",this.connectedAccount);
  }
}
