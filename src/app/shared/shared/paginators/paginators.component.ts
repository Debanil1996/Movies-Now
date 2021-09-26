import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'ehr-paginators',
  templateUrl: './paginators.component.html',
  styleUrls: ['./paginators.component.scss']
})
export class PaginatorsComponent implements OnInit,OnChanges {
  @Input('pages') pages=new Array(0);
  @ViewChild('scrollable',{read:ElementRef}) scroll:ElementRef;
  @Output() sendPage=new EventEmitter();
  indexSelected:number;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.pages.currentValue){
      this.pages=changes.pages.currentValue;
    }
  }
  scrolling(way:string){
    if(way==='r'){
      this.scroll.nativeElement.scrollLeft +=50;
    }else{
      this.scroll.nativeElement.scrollLeft -=50;
      if(this.scroll.nativeElement.scrollLeft <0){
        this.scroll.nativeElement.scrollLeft =0;
      }

    }
  }

  ngOnInit(): void {
  }


  public selectedIndex(index:number){
    this.indexSelected=index-1;
    this.sendPage.emit(index);
  }
}
