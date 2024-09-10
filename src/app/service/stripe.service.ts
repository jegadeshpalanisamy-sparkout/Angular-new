import { Injectable } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  private stripePromise: Promise<Stripe |null>

  constructor() {
    this.stripePromise = loadStripe('pk_test_51PZ6WiRxSEeK2VnR0iJtEBekeLjvonH5u7m2IB16q6gsrQ0yVQE2WycGyVLpmAC66zY04CdzwEUH1t6eUKMYTAJq00QMO9c5Xc'); // Replace with your Stripe publishable key

   }



   async createPayment(amount:number){
    const stripe = await this.stripePromise;
    // console.log(this.stripePromise);
    if(!stripe){
      
      throw new Error('stripe could not be initialized');
    }

    const result = await stripe.redirectToCheckout({
      lineItems:[
        {
          price: "price_1PpTBTRxSEeK2VnRBG56X0qY",
          quantity: 1
        },
      ],
      mode:'subscription',
      successUrl: 'http://localhost:4200/success', // Redirect to success URL
      cancelUrl: 'http://localhost:4200/cancel',
     })

     if(result.error){
      console.log(result.error.message);
     }

  }

  async getStripe(){
    return this.stripePromise;
  }
}
