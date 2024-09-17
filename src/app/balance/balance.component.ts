import { Component } from '@angular/core';
import { ContractService } from '../contract.service';
import { CommonModule } from '@angular/common';
import { promises } from 'dns';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent {

  address: string = '';  // The Ethereum address entered by the user
  balance: any ;
  loading: boolean = false;
  error: string = '';

  constructor(private contractService: ContractService) {

   }

   async getBalance() {
    this.loading = true;
    this.error = '';
    try {
      this.balance = this.contractService.getBalance(this.address)
      console.log(this.balance);

    } catch (error) {
      console.error('Error getting balance:', error);
      this.error = 'Error getting balance';
    } finally {
      this.loading = false;
    }
  }


  
}
