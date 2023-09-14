import { Component ,inject} from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
authService=inject(AuthService)
  userLoggedIn:any;
  ngOnInit():void
  {
  if(sessionStorage.getItem('isLoggedIn')==='yes')
  {
    this.userLoggedIn=true;
  }
  else
  {
    this.authService.isLoggedIn.subscribe((data:any)=>{
      this.userLoggedIn=data;
    })
  }
  }
}
