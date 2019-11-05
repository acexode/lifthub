import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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

  isLoggedIn(){
    const token = localStorage.getItem('token')
    if(token){
      return true
    }else{
      return false
    }
  }
}
