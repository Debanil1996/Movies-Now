import { Login } from './../models/login';
import { MAINURL } from './../env.constant';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient,HttpBackend} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
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
    }
  }


}
