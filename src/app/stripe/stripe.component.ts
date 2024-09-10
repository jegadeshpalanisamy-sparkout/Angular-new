import { Component, OnInit } from '@angular/core';
import { StripeService } from '../service/stripe.service';
import { Stripe, StripeCardElement, StripeElement, StripeElements, loadStripe } from '@stripe/stripe-js';
import { environment } from '../environment';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stripe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stripe.component.html',
  styleUrl: './stripe.component.css'
})
export class StripeComponent implements OnInit{

  stripe: Stripe | null = null;
  cardElements: StripeCardElement | null = null;
  loading = false;
  cardError: string|null =null;
  successMessage!:string;
constructor(private stripeService:StripeService){}


async ngOnInit(){
  this.stripe = await loadStripe('pk_test_51PZ6WiRxSEeK2VnR0iJtEBekeLjvonH5u7m2IB16q6gsrQ0yVQE2WycGyVLpmAC66zY04CdzwEUH1t6eUKMYTAJq00QMO9c5Xc');
  const ele=this.stripe!.elements();
  this.cardElements =ele.create('card'); 
  this.cardElements.mount('#card-element');

  this.cardElements.on('change',(event) => {
    this.cardError = event.error? event.error.message :null;
  })


  
}
//simple subscription
  handlePayment(){
    this.stripeService.createPayment(100);
  }


  async submitPayment() {
  

    if (!this.stripe || !this.cardElements) {
      this.cardError = "stripe cannot init properly"
      this.loading =false;
      return;
    }

    // const {error,paymentIntent} = await this.stripe.confirmCardPayment(
    //   'sk_test_51PZ6WiRxSEeK2VnRPkwBh3u9pJL0x8gNtbrKFZT2e3D5BpUMNQi6UaMSefQSv2QUZjpCme5uLr6YTaSMjdQxoiZ000jzbw3t4v',
    //   {
    //     payment_method: {
    //       card: this.elements.getElement('card'),
    //     },
    //   }
    // );

    // this.loading = false;

    // if (error) {
    //   this.paymentError = error.message || 'Payment failed';
    // } else if (paymentIntent?.status === 'succeeded') {
    //   alert('Payment successful!');
    // }

    const {paymentMethod,error} =await this.stripe.createPaymentMethod({
      type:'card',
      card: this.cardElements
    })

    if(error) {
      this.cardError=error.message??''
    } else {
      console.log("payment created",paymentMethod)
      this.successMessage="payment completed"

    }

  }
}
