import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
