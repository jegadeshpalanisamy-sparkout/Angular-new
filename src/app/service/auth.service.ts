import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private isAuthenticatedUser = false;
  login(){
    this.isAuthenticatedUser = true
  }

  logout() {
    this.isAuthenticatedUser = false;
  }

  isAuthenticated(){
    return this.isAuthenticatedUser;
  }
}
