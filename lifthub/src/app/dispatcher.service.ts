import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DispatcherService {

  constructor(private http: HttpClient) { }

  signup(user){
    return this.http.post('/api/signup', user);
  }
  login(user) {
    console.log(user);
    return this.http.post('/api/login', user);
  }
  subscribe(user) {
    console.log(user)
    return this.http.post('/api/subscribe', user);
  }
  search(space,location) {
    return this.http.get('/api/search?space='+space+'&location='+location);
  }
  spaceType(space) {
    return this.http.get('/api/spacetype?space='+space);
  }

  checkAvailability(msg) {
    return this.http.post('/api/email', msg);
  }

  isLoggedIn(){
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
