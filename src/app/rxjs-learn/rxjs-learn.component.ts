import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, Subject, from, of } from 'rxjs';
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

    
  }

}
