import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Location as Locations} from "@angular/common"
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router:Router,
    private _authService: AuthService,
    private _location:Locations
  ){}
  async canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    if(localStorage.getItem("Token")){
       return true;
    }
    else{
        this._router.navigate(["/auth"]).then(()=>{
            this._location.replaceState("/auth")
        });
        return false;
    }

}

}
