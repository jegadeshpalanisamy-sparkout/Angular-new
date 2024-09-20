import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit {

    //observable

    data:any[]=[];
    productId!: string;
    category!:string;
    routeSub!: Subscription;
    searchTerm!:string;
    searchProduct!:string;

    

    myObservable = new Observable((observer) => {
      // observer.next([1,2,3,4,5]);
      
      setTimeout(()=>{observer.next("1")},1000)
      setTimeout(()=>{observer.next("2")},2000)
      setTimeout(()=>{observer.next("3")},3000)
      // setTimeout(()=>{observer.error(new Error('something went wrong'))},3000)
      setTimeout(()=>{observer.next("4")},4000)
      setTimeout(()=>{observer.complete()},5000)

    })
  
    getAsyncData() {
      //next,error,complate
      this.myObservable.subscribe((data:any) =>{
        // this.data=data;
        this.data.push(data);
      },
      (err)=>{
        alert(err);
      },
      ()=>{
        alert('All data was emited completely');
      }
    )
    }

    counter = signal(0);
    messages = signal<string[]>([]);


    increment(){
      // this.counter.set(this.counter() + 1)
      this.counter.update((preValue)=> preValue +1)
    }

    degrement(){
      this.counter.set(this.counter()-1)
      this.counter.update((preValue)=> preValue -1)

    }
    constructor(private activeRoute:ActivatedRoute){}

    ngOnInit(): void {
     this.productId = this.activeRoute.snapshot.paramMap.get('id') ?? ''
      console.log('Product ID from snapshot:', this.productId);  //this is change only first time route was called

      this.routeSub = this.activeRoute.paramMap.subscribe((data)=>{//this is every time called even route parameter changed
        this.productId= data.get('id') ?? '';
        console.log('Product ID from subscribe:', this.productId);

//get value from query params
        this.activeRoute.queryParamMap.subscribe((data:any)=>{
          console.log(data);
          this.productId = data.params['id'];
          this.category = data.params['category'];
          this.searchTerm = data.params['search'] || 'No search term provided';
          
          console.log("from search bar with query param:",this.searchTerm);
          console.log("from query param:",this.productId);
          console.log("from query param:",this.category);
        })
    })
    }


    products = [
      { name: 'Apple', category: 'Fruit', price: 1.99 },
      { name: 'Banana', category: 'Fruit', price: 0.99 },
      { name: 'Carrot', category: 'Vegetable', price: 2.50 },
      { name: 'Broccoli', category: 'Vegetable', price: 3.25 },
      { name: 'Steak', category: 'Meat', price: 12.99 },
    ];
  
    filterProducts(){
      if(!this.searchProduct){
        return this.products;
      } else {
        return this.products.filter((product)=>product.name.toLowerCase().includes(this.searchProduct.toLowerCase()))
      }
    }
}
