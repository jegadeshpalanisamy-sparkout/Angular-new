import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserListComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-new';

  constructor(private cookie:CookieService){}

  setCookie(){
    console.log(1);
    this.cookie.set('jega','jega@yopmail.com');
    console.log("cookie was set successfully");
  }

  getCookie(){
   
    console.log(this.cookie.get('jega'));
  }

  RemoveCookie(){
    this.cookie.deleteAll();
  }
}
