import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import * as moment from 'moment-timezone';



@Injectable({
  providedIn: 'root'
})
export class DispatcherService {
  httpOptions
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('token') })
    };
   }
   check() {    
    return this.http.get(`/api/check`, this.httpOptions);
  }
  users() {
    return this.http.get('/api/users');
  }
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
  // add space
  addSpace(space) {
    
    console.log(this.httpOptions)
    return this.http.post(`/api/space/`, space, this.httpOptions);
  }
  uploadImage(formData) {    
    console.log(this.httpOptions)
    return this.http.post(`/api/upload`, formData);
  }
  transaction(details) {    
    console.log(this.httpOptions)
    return this.http.post(`/api/transactions`, details);
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
  getSingle(id) {
    return this.http.get(`/api/space/${id}`);
  }
  // get spaces owned by current admin
  ownerSpaces() {
    return this.http.get(`/api/ownerSpaces`, this.httpOptions);
  }
  payments() {
    return this.http.get(`/api/payments`, this.httpOptions);
  }
  // get single space
  getUserData() {
    return this.http.get(`/api/user`, this.httpOptions);
  }
   // all bookings
   Bookings(){
    return this.http.get(`/api/bookings`, this.httpOptions);
  }
  //delete booking
  deleteBooking(spaceId,bookingId){
    const options = {
      headers: this.httpOptions.headers,
      body: {
        spaceId,
        bookingId
      },
    };
    return this.http.delete('/api/space/' + spaceId);
  }
  extendBooking(spaceId, bookingId) {
    const msg = {
        spaceId,
        bookingId,
        headers: this.httpOptions.headers,
        msg : 'Requesting extension for booking'
      };
    return this.http.post('/api/email' + spaceId, msg );
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
    return moment.tz(dateString, 'Africa/Lagos').toDate();

}

bookSpace(data, prevBooking) {
  console.log(data);
  console.log(data.price);
  console.log(this.httpOptions);
  // convert to UTC Date Object
  const bookStart = this.dateUTC(data.startDate);
  const bookEnd = this.dateUTC(data.endDate);

  // Convert booking Date objects into a number value
  const newBookingStart = bookStart.getTime();
  const newBookingEnd = bookEnd.getTime();

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
  // If a recurring booking as been selected, ensure the end date is after the start date
  const dateString = data.recurringData[0];

  const validRecurring = (data.recurringData.length > 0) ?
    this.dateUTC(dateString).getTime() > newBookingEnd : true;

  // Save the booking to the database and return the booking if there are no clashes and the new booking time is not in the past
  if (!bookingClash && validDate && validRecurring ) {
    console.log('http');
    return this.http.put(`api/book/${data.spaceId}`, {
      bookingStart: bookStart,
      bookingEnd: bookEnd,
      spaceId: data.spaceId,
      recurring: data.recurringData,
      price : data.price

    }, this.httpOptions).toPromise();
    //  .catch(err => alert(err.response.data.error.message.match(/error:.+/i)[0]))
  }





}
}
