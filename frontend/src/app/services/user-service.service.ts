import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  sendMessage = new EventEmitter<string>();

  hello(){
    console.log('Hi this is user one');
  }
}
