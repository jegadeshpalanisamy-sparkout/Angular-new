import { Component } from '@angular/core';
import { Web3Service } from '../service/web3.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-web3-connect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web3-connect.component.html',
  styleUrl: './web3-connect.component.css'
})
export class Web3ConnectComponent {

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
}
