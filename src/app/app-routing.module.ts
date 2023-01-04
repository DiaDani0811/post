import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { table } from 'console';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {component : LoginComponent, path:'login'},
  {component : SignupComponent, path :'sign'},
  {component: ForgetpasswordComponent, path : 'forgtpwd'},

   {
    path:'layout',component:LayoutComponent,
     children:[
       {path:'',redirectTo:'home',pathMatch:'full'},
       {component : TableComponent, path:'table'},
      {component : HomeComponent, path:'home'},
      {component : FormsComponent, path:'forms'},
    ]

   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
