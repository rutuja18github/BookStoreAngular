import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplayBookComponent } from './Components/display-book/display-book.component';
import { OpenBookViewComponent } from './Components/open-book-view/open-book-view.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'login',component:SigninComponent},
  {path:'dashboard',component:DashboardComponent,
   children:[
    {path:'display',component:DisplayBookComponent},
    {path:'openBook',component:OpenBookViewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
