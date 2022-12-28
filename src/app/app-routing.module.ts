import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { table } from 'console';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {component : TableComponent, path:'table'},
  {component : HomeComponent, path:'home'},
  {component : FormsComponent, path:'forms'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
