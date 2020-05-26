import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  hello(){
    console.log('Hi this is user one');
  }
}
