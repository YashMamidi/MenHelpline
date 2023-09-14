import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent {

  sharedData: string = '';

  constructor(private authService: AuthService) {
    this.sharedData = this.authService.getSharedData();
  }



}
