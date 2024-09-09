import { Injectable,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  sub:Subject<number>;
  constructor() { 
    this.sub= new Subject();
  }

  // createTask: EventEmitter<string> = new EventEmitter<string>();
  
  createTask =new Subject<string>();
  onreateTask(value:string) {
    // this.createTask.emit(value);
    this.createTask.next(value);

    

  }


  


}
