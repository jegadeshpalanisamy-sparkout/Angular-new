import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HttpClientModule,CommonModule,ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users:User[]=[];
  constructor(private http:HttpClient){
  }


  ngOnInit(): void {
    // console.log('hii');
    this.getUsers().subscribe((response)=>{
      // console.log('response:',response);
      this.users=response;
      // console.log(this.users);
    })
    const userId = 1;
    const userData = { name: 'John Doe', phone: '122334455' };

    this.updateUser(userId,userData).subscribe((response)=>{
      console.log("user was updated successfully");
    })
  }
  getUsers(){
    console.log(1);
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  userForm=new FormGroup({
    name:new FormControl(""),
    phone:new FormControl("")
  })

  onSubmit(){
    console.log(this.userForm.value);
    this.addUser().subscribe((response)=>{
      this.users.push(response);
      // console.log(this.users);
    })
  }

  addUser() {
   return this.http.post<User>('https://jsonplaceholder.typicode.com/users',{
    name:this.userForm.controls.name.value,
    phone:this.userForm.controls.phone.value

 })}

 updateUser(id:any,data:any) {
    return this.http.put(`https://jsonplaceholder.typicode.com/users/${id}`,data);
 }
  
}
 
class User{
  
  name!:string;
  phone!:string;
}