import { Movie } from './../../../models/getData';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as _ from "lodash";
@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {
  receiveCardData:Movie;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:{cardDetail:Movie}
  ) { }

  ngOnInit(): void {
    this.receiveCardData=this.data.cardDetail;
  }

  public generateImage(title:string){
    const string=_.replace(_.trim(title)," ","+");
    return `https://ui-avatars.com/api/?name=${string}&size=512`;
  }
}
