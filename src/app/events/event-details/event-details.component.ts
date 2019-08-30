import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../models/event.model';
import { ISession } from '../models/session.model';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;

  constructor(private eventService: EventService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.event = this.eventService.getEvent(id);
  }

  addSession() {
    this.addMode = true;
  }

  sessionCreated(session: ISession) {
    const ids = this.event.sessions.map(s => s.id);
    const nextId = Math.max(...ids);
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

}
