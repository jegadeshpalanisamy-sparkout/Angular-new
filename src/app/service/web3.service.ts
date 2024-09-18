import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Web3Modal from 'web3modal';
import { BrowserProvider } from 'ethers';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  private web3Modal: Web3Modal | undefined;
  private provider: BrowserProvider | undefined;
  private signer: any | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    console.log('PlatformId:',platformId);
    
    console.log("isPlatformBrowser(this.platformId)",isPlatformBrowser(this.platformId));
    if (isPlatformBrowser(this.platformId)) {
      this.initWeb3Modal();
    }
  }

  private initWeb3Modal() {
    if (isPlatformBrowser(this.platformId)) {
      this.web3Modal = new Web3Modal({
        cacheProvider: true // Enables auto connection to the last wallet
      });
    }
  }

  async connectWallet() {
    if (!isPlatformBrowser(this.platformId)) {
      throw new Error('This functionality is only available in the browser.');
    }
    try {
      const instance = await this.web3Modal?.connect();
      console.log("instance:",instance);      
      this.provider = new BrowserProvider(instance);
      console.log('provider:',this.provider);
      this.signer = await this.provider.getSigner();
      console.log('signer',this.signer);

      const address = await this.signer.getAddress();

      console.log('connected address:', address);
      return address;
    } catch (error) {
      console.error('Error connecting wallet:', error);
      throw error;
    }
  }

  disconnect() {
    if (isPlatformBrowser(this.platformId)) {
      this.web3Modal?.clearCachedProvider();
      console.log('web3model',this.web3Modal)
      alert(1);
      this.provider = undefined;
      this.signer = undefined;
      console.log('wallet disconnected');
    }
  }

  async signMessage(address: any) {
    if (!isPlatformBrowser(this.platformId)) {
      throw new Error('This functionality is only available in the browser.');
    }
    if (!this.signer) {
      throw new Error('Wallet not connected.');
    }
    try {
      const signature = await this.signer.signMessage(address);
      console.log('Signature:', signature);
      return signature;
    } catch (error) {
      console.error('Error signing message:', error);
      throw error;
    }

  }
}
