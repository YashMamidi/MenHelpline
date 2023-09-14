import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-phase1',
  templateUrl: './phase1.component.html',
  styleUrls: ['./phase1.component.css']
})
export class Phase1Component {
authService=inject(AuthService);
snackBar=inject(MatSnackBar);

  userName: string = '';
  password: string = '';
  passwordFieldType: string = 'password';
  rememberMe: boolean = false;

  firebaseConfig = {
    apiKey: "AIzaSyCB3kfe2JiHRKcm_vXMxTQngdsX0PG3gPI",
    authDomain: "mlangular.firebaseapp.com",
    projectId: "mlangular",
    storageBucket: "mlangular.appspot.com",
    messagingSenderId: "209942717076",
    appId: "1:209942717076:web:3ebf3fb4064b0f14880a81"
  };
  app = initializeApp(this.firebaseConfig);
  title = 'ML';
  credential: any;
  token: any;

  auth = getAuth();
  provider = new GoogleAuthProvider();

  constructor(private router: Router, public http:HttpClient) {}

  change() {
    signInWithPopup(this.auth, this.provider).then(result => {
      this.credential = GoogleAuthProvider.credentialFromResult(result);
      this.token = this.credential.accessToken;
      console.log(result.user);

      alert('success');
      this.router.navigate(['/phase2']);
    }).catch(err => {
      console.log(err);
    });
  }

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }


  login(){
    console.log(this.userName,this.password);
    this.http.get<any>("http://localhost:3000/singup").subscribe(data=>{
      const user=data.find((a:any)=>{
        return a.email===this.userName && a.password===this.password
      });
      if(user){
        console.log('success');
        this.snackBar.open('User Logged in Successfully','Undo',{duration:2000});
        sessionStorage.setItem('isLoggedIn','yes');
        this.authService.isLoggedIn.next(true);
        this.router.navigate(['/home']);


      }
      else{
        console.log('notsuccess')
        this.snackBar.open('User Not-Found','Undo',{duration:2000});
      }
    })
  }

}
