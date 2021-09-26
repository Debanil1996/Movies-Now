import { Observable } from 'rxjs';
import { HttpBackend } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class BypassService {
  private httpClient:HttpClient
  constructor(handler:HttpBackend) {
    this.httpClient=new HttpClient(handler);
   }

   async getImage(title:string){
     const string=_.replace(_.trim(title)," ","+");
     return this.httpClient.get(`https://ui-avatars.com/api/?name=${string}`).subscribe((response)=>{
       return response;
     },(err)=>{
       console.error(err);
     })
   }
}
