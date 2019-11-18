import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DispatcherService {

  constructor(private http: HttpClient) { }
  // signup new user
  signup(user) {
    return this.http.post('/api/signup', user);
  }
  // login user
  login(user) {
    return this.http.post('/api/login', user);
  }
  // subscribe to newsletter
  subscribe(user) {
    return this.http.post('/api/subscribe', user);
  }
  // search for space based on location and spacetype
  search(type, location) {
    return this.http.get(`/api/space/search?space=${type}&location=${location}`);
  }
  // search based on spacetype
  spaceType(space) {
    return this.http.get(`/api/space/type?spaceType=${space}`);
  }
  // get all space in a location
  getLocationData(lat, lng) {
    return this.http.get(`/api/space/locate?lat=${lat}&lng=${lng}`);
  }
  // check if a space is available
  checkAvailability(msg) {
    return this.http.post('/api/email', msg);
  }
  // check if user is logged in
  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
