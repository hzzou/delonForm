import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DelonFormComponent} from './components';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index', component: DelonFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
