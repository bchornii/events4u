import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../models/event.model';

@Component({
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {
  events: IEvent[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data.events;
  }
}
