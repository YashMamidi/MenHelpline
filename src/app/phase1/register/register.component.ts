import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public http:HttpClient){}
router=inject(Router);

signuser:any;
registerForm:any;
formBuilder=inject(FormBuilder);
ngOnInit() :void{
  this.registerForm=this.formBuilder.group(
    {
      fullName:[''],
      email:[''],
      phoneNumber:[''],
      password:['']
    })

}
register(){
  this.signuser=this.registerForm.value.email
  this.http.post<any>("http://localhost:3000/singup",this.registerForm.value).subscribe(res=>{
    alert('data added successfully');
    this.registerForm.reset();
    this.router.navigate(['/']);

  },err=>{
    alert('something went wrong');
  }
  )
}


}
