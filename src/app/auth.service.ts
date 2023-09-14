import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private sharedData: any;



  getSharedData(): any {
    return this.sharedData;
  }
  setSharedData(data: any): void {
    this.sharedData = data;
  }



  isLoggedIn=new BehaviorSubject<any>(false);

}
