import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component'
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { TrashComponent } from './components/trash/trash.component';

const routes: Routes = [{
  path:'',
  component: LoginComponent
},{
  path:'signup',
  component: SignupComponent 
},{
  path:'home',
  component: HomeComponent
},
{
  path:'trash',
  component: TrashComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
