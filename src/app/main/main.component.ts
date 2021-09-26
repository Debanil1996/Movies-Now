import { ToasterService } from './../../services/toaster.service';
import { BypassService } from './../../services/bypass.service';
import { Movie } from './../models/getData';
import { AfterViewInit, Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import * as _ from "lodash";
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { debounceTime, delay, shareReplay, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,OnDestroy,AfterViewInit {
  isLoading:boolean=false;
  pageNumbers: any;
  public movieData:Observable<Movie[]>;
  normalData:Movie[];
  showRefresh:boolean=false;
  currentPage: any;
  constructor(
    private _authService:AuthService,
    private toast:ToasterService,
    private cdr:ChangeDetectorRef

  ) {


  }
  ngAfterViewInit() {
    this.searchTerm=new Subject<string>();

  }
  ngOnDestroy(){
    this.searchTerm.complete();
  }
  private searchTerm: Subject<string> ;

  ngOnInit(){
    this.getData(1);



  }
  startSearch() {
    const data=this.searchTerm.pipe(debounceTime(250),
    switchMap((value:string)=>{
      value=value.toLowerCase();

      if(value.length > 3){
        const values=_.filter(this.normalData,(elem:Movie)=>elem.title.toLowerCase().includes(value));
        return of(values).pipe(delay(100));
      }else{
        return of(this.normalData).pipe(delay(100));
      }
    }
    ),shareReplay(1));
    data.subscribe((val)=>{
      this.movieData=of(val);
      this.cdr.detectChanges();
    })
  }
  getData(page:number) {
    this.isLoading=true;
    const authSub=this._authService.getMovieDetails(page).subscribe((response)=>{
      this.pageNumbers=new Array(Math.floor(response[`count`]/10));
      this.movieData=of(response[`results`]);
      this.normalData=response[`results`];
      this.isLoading=false;
      this.showRefresh=false;
      authSub.unsubscribe();
    },(err)=>{
      this.toast.error(`Cant receive the data Retry`);
      this.showRefresh=true;
      this.isLoading=false;
      authSub.unsubscribe();
    })

  }

  search(data:string){
    console.log(data);
    this.searchTerm.next(data);
    this.startSearch();
  }

  pageSelected(ev){
    this.currentPage=ev;
    this.getData(ev);
  }

  public logout(){
    this._authService.clearStorage();
    this.toast.warning(`Logged out`);
  }
  public refresh(){
    this.currentPage=this.currentPage?this.currentPage:1;
      this.getData(this.currentPage);
  }

}
