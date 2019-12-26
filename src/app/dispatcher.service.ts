import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';


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
  // get single space
  getSingle(id){
    return this.http.get(`/api/space/${id}`);
  }
  // get single space
  getUserData(){
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('token') })
    };
    return this.http.get(`/api/user`,httpOptions);
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
  // Function to receive booking data (WAT) and convert to JS Date object
 dateUTC = (dateString) => {
  // Ensure date data is saved in WAT and then converted to a Date object in UTC
  // momentTimezone.tz.names();
    return moment.tz(dateString, "Africa/Lagos").toDate();
  
}
bookSpace(data, prevBooking) {
  const httpOptions = {
    headers: new HttpHeaders({ 'Authorization': localStorage.getItem('token') })
  };
  console.log(httpOptions);
  // convert to UTC Date Object
  const bookStart = this.dateUTC(data.startDate);
  const bookEnd = this.dateUTC(data.endDate); 
  console.log(bookStart)
  console.log(bookEnd)
  // Convert booking Date objects into a number value
  const newBookingStart = bookStart.getTime();
  const newBookingEnd = bookEnd.getTime(); 
  console.log(newBookingStart);
  console.log(newBookingEnd);
  // Check whether the new booking times overlap with any of the existing bookings
  let bookingClash = false;
  if (prevBooking.length > 0 ) {
    prevBooking.forEach(booking => {

      // Convert existing booking Date objects into number values
      const existingBookingStart = new Date(booking.bookingStart).getTime();
      const existingBookingEnd = new Date(booking.bookingEnd).getTime();

      // Check whether there is a clash between the new booking and the existing booking
      if (newBookingStart >= existingBookingStart && newBookingStart < existingBookingEnd ||
          existingBookingStart >= newBookingStart && existingBookingStart < newBookingEnd) {
            // Switch the bookingClash variable if there is a clash
            return bookingClash = true;
      }
    });

  }
  // Ensure the new booking is valid (i.e. the start time is before the end time, and the booking cois for a future time)
  const validDate = newBookingStart < newBookingEnd && newBookingStart > new Date().getTime();
  console.log(validDate)
  // If a recurring booking as been selected, ensure the end date is after the start date
  const dateString = data.recurringData[0]

  const validRecurring = (data.recurringData.length > 0) ?
    this.dateUTC(dateString).getTime() > newBookingEnd : true;

  // Save the booking to the database and return the booking if there are no clashes and the new booking time is not in the past
  if (!bookingClash && validDate && validRecurring ) {
    console.log('http');
    return this.http.put(`api/book/${data.spaceId}`, {
      bookingStart: bookStart,
      bookingEnd: bookEnd,
      spaceId: data.spaceId,
      recurring: data.recurringData

    }, httpOptions).toPromise();
    //  .catch(err => alert(err.response.data.error.message.match(/error:.+/i)[0]))
  }





}
}
