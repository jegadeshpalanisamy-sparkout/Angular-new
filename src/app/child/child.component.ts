import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

 @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    
      this.messageEvent.emit('Hello from the child component');
      console.log(this.messageEvent);
  }
}
