import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { taskArray } from './tasksArray';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit, OnDestroy {
  id: string;
  taskInput: string = '';
  tasks:taskArray[] = [];
  sub: any;
  constructor(private router:Router, private route: ActivatedRoute, private userService: UserServiceService) {
    this.sub = this.userService.sendMessage.subscribe((msg:string)=>{
      alert(msg);
    })
   }

  ngOnInit(): void {
    this.userService.getData().subscribe(data => console.log(data));
    this.userService.postdata().subscribe(data=>console.log(data));
    // this.route.queryParams.subscribe(params =>{
    //   this.id = params['id'];
    //   alert(this.id);
    // })
    this.id = this.route.snapshot.paramMap.get('id');
    alert(this.id);
  }


  addTask(){
    this.tasks.push({id: this.tasks.length, taskTitle: this.taskInput, status: 1});
  }

  logout(){
    this.router.navigate(['/']);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
