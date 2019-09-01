import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'e4u-collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <ng-content *ngIf="visible" select="[well-body]">
      </ng-content>
    </div>
  `
})
export class CollapsibleWellComponent implements OnInit {

  visible = false;

  constructor() { }

  ngOnInit() {
  }

  toggleContent() {
    this.visible = !this.visible;
  }

}
