import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'e4u-app-root',
  template: `
      <e4u-nav></e4u-nav>
      <e4u-event-list></e4u-event-list>
  `
})
export class AppComponent {
  title = 'events4u';
}
