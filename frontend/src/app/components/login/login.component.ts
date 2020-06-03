import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  //providers:[UserServiceService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor( private userService: UserServiceService) { 
    this.userService.hello();
    this.userService.sendMessage.emit('Cross communication');

  }

  ngOnInit(): void {
   
  }

  doLogin(): void {
    console.log('doLogin', this.loginForm.value);
    let res = this.userService.doLogin(this.loginForm.value.username, this.loginForm.value.password)
    alert(res.status);
  }

}
