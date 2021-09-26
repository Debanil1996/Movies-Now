import { Login } from './../models/login';
import { MAINURL } from './../env.constant';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient,HttpBackend} from "@angular/common/http"
import * as moment from 'moment';
import { Router } from '@angular/router';
import {Location as Locations} from "@angular/common";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient,
    private _router:Router,
    private _location:Locations
  ) { }

  postLogin(form:Login):Observable<any>{
    return this.http.post(`${MAINURL}/usermodule/login/`,form);
  }

  getMovieDetails(pageNumber:number):Observable<any>{
    if(pageNumber <= 1){
    return this.http.get(`${MAINURL}/maya/movies/`);
    }
    return this.http.get(`${MAINURL}/maya/movies/?page=${pageNumber}`);
  }

  clearStorage(){
    if(localStorage.getItem("Token")){
      localStorage.clear();
      this._router.navigate(["/auth"]).then(()=>{
        this._location.replaceState("/auth")
    });
    }
  }

  checkExpiry(){
    const date=moment(localStorage.getItem("Time"),"yyyy-MM-DD hh:mm");
    const difference=moment().diff(date,"hours");
    if(difference> 4){
      localStorage.clear();
      this._router.navigate(["/auth"]).then(()=>{
        this._location.replaceState("/auth")
    });
    }
  }


}
