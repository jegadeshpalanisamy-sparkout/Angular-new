import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { UnlessDirective } from './unless.directive';
import { FilterCustomPipePipe } from './custom-pipe/filter-custom-pipe.pipe';
import { DemoComponent } from './demo/demo.component';
import { HttpClient } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserListComponent,RouterModule,CommonModule,UnlessDirective,FilterCustomPipePipe,DemoComponent,FileUploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Angular-new';

  constructor(private cookie:CookieService,private http:HttpClient){}

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


  numbers = [
    { id: 1, name: 'Number 1' },
    { id: 2, name: 'Number 2' },
    { id: 3, name: 'Number 3' }
  ];

  trackbyId(index:number, num:any){
    return num.id;
  }

  //test unless directive variable
  display=false;

  //custum filter pipe data
  fruits = [
    { name: 'apple' },
    { name: 'banana' },
    { name: 'grape' },
    { name: 'pineapple' }
  ];

  //interceptors http req
  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.org/users').subscribe(
      (response)=>{
        console.log(response);
      }
    );
  }

}
