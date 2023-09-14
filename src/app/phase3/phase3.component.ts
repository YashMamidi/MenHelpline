import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter,inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-phase3',
  templateUrl: './phase3.component.html',
  styleUrls: ['./phase3.component.css']
})
export class Phase3Component {

constructor(public http:HttpClient,private authService: AuthService){}
query:any;
a:any;
inputData: string = '';

ngOnInit(){
  this.a=this.query;
}
snackBar=inject(MatSnackBar)

  submit(){
    this.authService.setSharedData(this.inputData);

    this.http.post<any>("http://localhost:3000/Query",this.a.value).subscribe(res=>{
    this.snackBar.open('Query Successfully Send','Undo',{duration:500});
    this.query.reset();


  },err=>{
    this.snackBar.open('Something Went Wrong','Undo',{duration:2000});
  }
  )}

}
