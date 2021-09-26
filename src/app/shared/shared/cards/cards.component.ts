import { CardDisplayComponent } from './../card-display/card-display.component';
import { Movie } from './../../../models/getData';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import * as _ from "lodash";
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'ehr-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit,OnChanges {
  @Input('movie') movieData:Movie[];
  constructor(
    private _dialog:MatDialog
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }


  public generateImage(title:string){
    const string=_.replace(_.trim(title)," ","+");
    return `https://ui-avatars.com/api/?name=${string}&size=512`;
  }

  openDialog(data:Movie){
    this._dialog.open(CardDisplayComponent,{
      height:'49rem',
      width:'64rem',
      maxHeight:'100%',
      maxWidth:'100%',
      panelClass:'card-display',
      autoFocus:false,
      data:{
        cardDetail:data
      }

    });
  }
}
