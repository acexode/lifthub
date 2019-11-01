import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DispatcherService {
  User = {username:"",password:""}
  constructor(private http: HttpClient) { }

  signup(user){
    return this.http.post("/api/signup",user)
  }
  login(user){
    console.log(user)
   return this.http.post("/api/login",user)
  }
}
