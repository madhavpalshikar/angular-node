import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  //providers:[UserServiceService]
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserServiceService) { 
    this.userService.hello();
    this.userService.sendMessage.emit('Cross communication');
  }

  ngOnInit(): void {
  }

}
