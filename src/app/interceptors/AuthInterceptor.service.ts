import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('auth interceptor was called');

    const modifiedReq = req.clone({
      setHeaders: {
        Authorization : `Bearer YOUR_AUTH_TOKEN`
      }
    })
    return next.handle(modifiedReq).pipe(tap((event)=>{
      if(event.type === HttpEventType.Response) {
        console.log("event type:",event.type);
        console.log("response",HttpEventType.Response);
        
        console.log("response was arrived"),
        console.log(event.body);
      }
    }))
  }

}
