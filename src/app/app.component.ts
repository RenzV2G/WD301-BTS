import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Breaking the Silence';
  constructor(private router: Router) {
  }

  navigateToCompose() {
      this.router.navigateByUrl('/compose');
  }
  navigateToFreedomWall() {
    this.router.navigateByUrl('/freedomwall');
  }
  
}
