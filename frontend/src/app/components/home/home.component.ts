import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { taskArray } from './tasksArray';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  taskInput: string = '';
  tasks:taskArray[] = [];
  constructor(private userService: UserServiceService) {
    this.userService.sendMessage.subscribe((msg:string)=>{
      //alert(msg);
    })
   }

  ngOnInit(): void {
  }

  addTask(){
    this.tasks.push({id: this.tasks.length, taskTitle: this.taskInput, status: 1});
  }

}
