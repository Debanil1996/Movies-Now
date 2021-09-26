import { ToasterService } from './../../services/toaster.service';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Location as Locations} from "@angular/common"
import {Login} from "../models/login";
import { Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  movieForm:FormGroup;
  isActive:boolean=false;
  loginSuccess:boolean;
  constructor(
    private authService: AuthService,
    private toast:ToasterService,
    private _authService: AuthService,
    private _location:Locations,
    private _router:Router,
  ) { }

  ngOnInit() {
    this.movieForm=this.buildForm();
    this.authService.checkExpiry();
  }
  buildForm() {
    return new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    });
  }

  submit(value:Login){
    const valuegot:Login=value;

    this.movieForm.disable();
    const authSub=this.authService.postLogin(valuegot).subscribe((response)=>{
      if(response[`is_success`] === true){
        localStorage.setItem("Token",response[`data`][`token`]);
        localStorage.setItem("Time",moment().format("yyyy-MM-DD hh:mm"));
        this.loginSuccess=true;
        this.toast.success(`User is Logged In`);
        this.movieForm.enable();
        authSub.unsubscribe();
        this._router.navigate(["/main"]).then(()=>{
          this._location.replaceState("/main")
      });
      }
    },(err)=>{
      this.loginSuccess=false;
      this.toast.error(`User not logged in `);
      this._authService.clearStorage();
      this.movieForm.enable();
    })
  }

}

