import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, from, interval, of, } from 'rxjs';
import { DemoComponent } from '../demo/demo.component';
import { DemoService } from '../service/demo.service';

@Component({
  selector: 'app-rxjs-learn',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './rxjs-learn.component.html',
  styleUrl: './rxjs-learn.component.css'
})
export class RxjsLearnComponent implements OnInit{

  constructor(private demoService:DemoService){
    demoService.sub.subscribe(x=>console.log("From rxjs component ",x));
  }

  array1=[1,2,3,4]
  array2=['a','b','c']

  data:any=[];

  // myObservable =of(this.array1,this.array2);
  myObservable = from(this.array1);
  // myObservable = from("12345");

  getData(){
    this.myObservable.subscribe({
      next:(val)=>{
        console.log(val);
        this.data.push(val);
      },
      error:(err)=>{
          console.log(err);
      },
      complete(){
        alert("All data was streamed");
      }

    })
  }

  newTask:string='';


  storeTask() {
    this.demoService.onreateTask(this.newTask);
  }


  ngOnInit(): void {
    let obs=new Observable((observer)=>{observer.next(Math.random())})

    let sub = new Subject();

    obs.subscribe((data)=>console.log(data));

    obs.subscribe((data)=>console.log(data));

    sub.subscribe((data)=>console.log(data))
    sub.subscribe((data)=>console.log(data))

    sub.next(Math.random()); 
    //it emit initial value first and its store last emited value
    let behaviourSubject = new BehaviorSubject<number>(100);

    behaviourSubject.subscribe((data)=>console.log("subcriber 1",data))
    behaviourSubject.subscribe((data)=>console.log("subcriber 2",data))

    behaviourSubject.next(200);//

    behaviourSubject.subscribe((data)=>console.log("subcriber 3",data))
    
    behaviourSubject.next(300);

    behaviourSubject.subscribe((data)=>console.log("subcriber 4",data))
    behaviourSubject.subscribe((data)=>console.log("subcriber 5",data))

    console.log("Replay subject"); //store and replay a number of previous values to new subscribers. The number of values it replays depends on how it’s configured.
    let replaySub = new ReplaySubject(1);
    replaySub.next(500);
    replaySub.next(1000);


    replaySub.subscribe((data)=>console.log("replay sub 1:",data))
    replaySub.subscribe((data)=>console.log("replay sub 2:",data))

    replaySub.next(2000);

    replaySub.subscribe((data)=>console.log("replay sub 3:",data))
    replaySub.subscribe((data)=>console.log("replay sub 4:",data))
    replaySub.next(3000);


    console.log("Async subject");

    let asyncSubject = new AsyncSubject();

    asyncSubject.next(2000);
    asyncSubject.next(1000);
    // asyncSubject.complete();

    asyncSubject.subscribe((data)=>console.log("async sub 1:",data))//only store last emiting value
    asyncSubject.subscribe((data)=>console.log("async sub 2:",data))

    asyncSubject.next(7000);
    asyncSubject.next(8000);
    asyncSubject.complete();
  }

  //learn unsubscribe
  count=interval(1000);
  num:number[]=[];
  subscriber:any;
  onSubscribe() {
    this.subscriber=this.count.subscribe((val)=>{
      this.num.push(val);
    })
  }

  unSubscribe(){
    this.subscriber.unsubscribe();
  }




}
