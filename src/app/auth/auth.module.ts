import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaterialModuleNew } from '../material.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path:'',component:AuthComponent
  }
];

@NgModule({
  declarations: [
    AuthComponent
  ],
  exports:[
    AuthComponent
  ],
  providers:[],
  entryComponents:[
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MaterialModuleNew,
    HttpClientModule
  ]
})
export class AuthModule { }
