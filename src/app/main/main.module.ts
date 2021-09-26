import { MaterialModuleNew } from './../material.module';
import { AuthGuard } from './../auth/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared/shared.module';
import { httpInterceptorProviders } from '../interceptors';

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
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModuleNew
  ],exports:[
    MainComponent
  ],
  providers:[
    httpInterceptorProviders
  ]
})
export class MainModule { }
