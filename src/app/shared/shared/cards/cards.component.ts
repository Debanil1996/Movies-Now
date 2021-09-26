import { Movie } from './../../../models/getData';
import { Component, Input, OnInit } from '@angular/core';
import * as _ from "lodash";


@Component({
  selector: 'ehr-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input('movie') movieData:Movie[];
  constructor() { }

  ngOnInit(): void {
  }


  public generateImage(title:string){
    const string=_.replace(_.trim(title)," ","+");
    return `https://ui-avatars.com/api/?name=${string}&size=512`;
  }
}
