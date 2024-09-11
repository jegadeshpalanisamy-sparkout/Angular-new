import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {

  logMessage(message: string): void {
    console.log(`BaseComponent log: ${message}`);
  }

  fetchData(): void {
    // Simulate data fetching
    console.log('Fetching data in BaseComponent...');
  }
}
