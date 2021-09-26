import { ToasterService } from './../../services/toaster.service';
import { BypassService } from './../../services/bypass.service';
import { Movie } from './../models/getData';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import * as _ from "lodash";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isLoading:boolean=false;
  pageNumbers: any;
  public movieData:Movie[];
  constructor(
    private _authService:AuthService,
    private toast:ToasterService

  ) { }

  ngOnInit(){
    this.getData(1);

  }
  getData(page:number) {
    this.isLoading=true;
    const authSub=this._authService.getMovieDetails(page).subscribe(async(response)=>{
      this.pageNumbers=new Array(Math.floor(response[`count`]/10));
      this.movieData=await this.preprocess(response[`results`]);
      this.isLoading=false;
      authSub.unsubscribe();
    },(err)=>{
      this.toast.error(`Cant receive the data Retry`);
      this.isLoading=false;
      authSub.unsubscribe();
    })

  }
  preprocess(result:Movie[]): Promise<Movie[]>  {
    return new Promise((resolve)=>{
      result.forEach((movie:Movie)=>{
        movie.description=_.truncate(movie.description,{
          'length': 30,
        });
      });
      resolve(result);
    });
  }

  pageSelected(ev){
    this.getData(ev);
  }

  public logout(){
    this._authService.clearStorage();
    this.toast.warning(`Logged out`);

  }

}
