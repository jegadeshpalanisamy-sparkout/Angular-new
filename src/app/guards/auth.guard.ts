
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean | Observable<boolean> {
    const isAuthenticated =  this.authService.isAuthenticated(); // Example auth check
    if (!isAuthenticated) {
      return false;
    }
    return true;
  }
}