import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';
import { ISession } from '../events/models/session.model';
import { EventService } from '../events/event.service';
import { IEvent } from '../events/models/event.model';

@Component({
  selector: 'e4u-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  searchTerm = '';
  foundSessions: ISession[];
  events: IEvent[];

  constructor(private authService: AuthService,
              private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }

  searchSessions() {
    this.eventService.searchSessions(this.searchTerm)
      .subscribe(sessions => this.foundSessions = sessions);
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  get currentUserName(): string {
    const currentUser = this.authService.currentUser;
    if (currentUser) {
      return currentUser.firstName;
    }
  }
}
