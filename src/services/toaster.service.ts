import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(
    private toastr: ToastrService
  ) { }

  public success(message:string){
    this.toastr.success(message,`Success`);
  }

  public error(message:string){
    this.toastr.error(message,`Error`);
  }

  public warning(message:string){
    this.toastr.warning(message,`Warning`);
  }
}
