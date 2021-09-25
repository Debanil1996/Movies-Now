import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';


const routes: Routes = [
        {
          path:'',redirectTo:'/auth',
          pathMatch:'full'
        },
        {
          path:'auth',
          loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)
        },{
          path:'main',
          loadChildren:()=> import('./main/main.module').then(m=>MainModule)
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
