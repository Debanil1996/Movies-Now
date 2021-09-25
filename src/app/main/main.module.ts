import { AuthGuard } from './../auth/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

const routes:Routes=[
  {
    path:'',
    component:MainComponent,
    canActivate:[AuthGuard]
  }
]

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],exports:[
    MainComponent
  ]
})
export class MainModule { }
