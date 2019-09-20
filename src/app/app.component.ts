import { Component, OnInit } from '@angular/core';
import { AuthService } from './users/auth.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'e4u-app-root',
  template: `
      <e4u-nav></e4u-nav>
      <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  title = 'events4u';

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.checkAuthStatus()
      .subscribe();
  }
}
