import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  sendMessage = new EventEmitter<string>();

  hello() {
    console.log('Hi this is user one');
  }

  getData() {
    // options: {
    //   headers?: HttpHeaders | {[header: string]: string | string[]},
    //   observe?: 'body' | 'events' | 'response',
    //   params?: HttpParams|{[param: string]: string | string[]},
    //   reportProgress?: boolean,
    //   responseType?: 'arraybuffer'|'blob'|'json'|'text',
    //   withCredentials?: boolean,
    // }
    return this.http.get('https://reqres.in/api/users?page=2', { responseType: 'json' });
  }

  postdata() {
    return this.http.post('https://reqres.in/api/login', {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    }, { responseType: 'json' });
  }


  doLogin(username: string, password: string){
    if(username=="test" && password =="123456"){
      return {status: true};
    }
    else{
      return {status: false};
    }
  }
}
