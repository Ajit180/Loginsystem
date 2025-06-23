import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Users {

  private baseurl='http://localhost:3000/api/v1/user';

  constructor(private http:HttpClient) { }

  registerUser(data:any): Observable<any>{
       return this.http.post(`${this.baseurl}/register`,data)
  }

  loginUser(data: any): Observable<any> {
  return this.http.post(`${this.baseurl}/login`, data);
}


}
