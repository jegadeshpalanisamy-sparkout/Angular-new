import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SocketService } from '../service/socket.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-socket-demo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './socket-demo.component.html',
  styleUrl: './socket-demo.component.css'
})
export class SocketDemoComponent  implements OnInit{
  message: string = '';
  messages: string[] = [];

  constructor(private socketService: SocketService,private cdr: ChangeDetectorRef) {}

  
  ngOnInit(): void {
    // // Listen for incoming messages
      this.socketService.listen('chat').subscribe((message: string) => {
      this.messages.push(message);
      this.cdr.detectChanges(); // Manually trigger change detection

      console.log(message);
      console.log(this.messages)

    });
  }

  sendMessage(): void {
    // Send a message to the server
    if (this.message.trim()) {
      this.socketService.emit('chat', this.message);
      this.message = '';  // Clear the input field
    }
}

}
