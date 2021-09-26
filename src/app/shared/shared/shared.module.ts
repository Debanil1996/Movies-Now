import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorsComponent } from './paginators/paginators.component';
import { CardsComponent } from './cards/cards.component';
import { MaterialModuleNew } from 'src/app/material.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [PaginatorsComponent, CardsComponent, SpinnerComponent],
  imports: [
    CommonModule,
    MaterialModuleNew,
    NgxSpinnerModule
  ],
  exports:[
    PaginatorsComponent,
    CardsComponent,
    SpinnerComponent
  ],
  providers:[],
  entryComponents:[
    PaginatorsComponent,
    CardsComponent,
    SpinnerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
