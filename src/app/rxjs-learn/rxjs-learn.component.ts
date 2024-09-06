import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-learn.component.html',
  styleUrl: './rxjs-learn.component.css'
})
export class RxjsLearnComponent {


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
}
