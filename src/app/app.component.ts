import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'e4u-app-root',
  template: `
      <e4u-nav></e4u-nav>
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'events4u';
}
