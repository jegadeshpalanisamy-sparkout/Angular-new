import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-life-cycle-hooks',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css'
})
export class LifeCycleHooksComponent {

  inputText: string='';
  onSubmit(inputEl:HTMLInputElement){
    this.inputText=inputEl.value;
  }
}
