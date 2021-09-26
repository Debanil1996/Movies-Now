import { ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'ehr-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit,OnDestroy {

  constructor(
    private spinner: NgxSpinnerService,
    private cdr:ChangeDetectorRef
  ) { cdr.detach(); }
  ngOnDestroy() {
    this.spinner.hide();
  }


  ngOnInit(): void {
    this.spinner.show();
    this.cdr.reattach();
  }

  public quotesRandom(){
    const quotes=[
      "Movies the embodiment of Entertainment",
      "There are lots of new Features",
      "The source of Knowledge comes from Movies"
    ]
    const number=Math.floor(Math.random() * 2);
    return quotes[number];

  }

}
