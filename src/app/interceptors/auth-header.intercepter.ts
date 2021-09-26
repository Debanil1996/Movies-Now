import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import {fromPromise} from "rxjs/internal/observable/fromPromise";
import {mergeMap} from  "rxjs/operators"

@Injectable({
    providedIn: 'root'
})
export class AuthHeaderInterceptor implements HttpInterceptor {
    constructor(){
    }
    /**
     * Intercepter for headers on http
     * @param req Http Request
     * @param next Handler for new Execution
     * @returns
     */
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token=localStorage.getItem("Token");
          if(token === undefined ||
             token === '' ||
             token === null){
              return next.handle(req);
             }
            const authToken="Token "+token;
            const autReq=req.clone({
                setHeaders:{Authorization: authToken}
            })
            return next.handle(autReq);


    }
}
