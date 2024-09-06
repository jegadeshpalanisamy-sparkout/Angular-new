import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

    //observable

    data:any[]=[];

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

}
