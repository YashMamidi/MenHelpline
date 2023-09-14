import { Component,inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phase2',
  templateUrl: './phase2.component.html',
  styleUrls: ['./phase2.component.css']
})
export class Phase2Component {
  auth=inject(AuthService);
  router=inject(Router);


  logout(){
    this.auth.isLoggedIn.next(false);
    sessionStorage.clear();
    this.router.navigate(['/'])
 }

}
