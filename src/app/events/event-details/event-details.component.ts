import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent } from '../models/event.model';
import { ISession } from '../models/session.model';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'name';

  constructor(private eventService: EventService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params.id);
      this.addMode = false;
    });

    const id = +this.route.snapshot.paramMap.get('id');
    this.event = this.eventService.getEvent(id);
  }

  addSession() {
    this.addMode = true;
  }

  sessionCreated(session: ISession) {
    const nextId = Math.max(...this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

  isFilterBy(level: string): boolean {
    return this.filterBy === level;
  }

  setFilterBy(level: string): void {
    this.filterBy = level;
  }

  isSortBy(term: string): boolean {
    return this.sortBy === term;
  }

  setSortBy(term: string): void {
    this.sortBy = term;
  }

}
