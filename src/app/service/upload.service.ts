import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }
  baseUrl='http://127.0.0.1:8000/api/';
  


  upload(file:File):Observable<any>{
    console.log(file);
    const formData = new FormData();
    formData.append('file',file)
    // const appendedFile = formData.get('file');
    // console.log( appendedFile);
    return this.http.post<any>(this.baseUrl+'uploads',formData);
  }
  
}
