import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../models/session.model';

@Component({
  selector: 'e4u-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {

  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  visibleSessions: ISession[] = [];

  constructor() { }

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortSessions(this.sortBy);
    }
  }

  private filterSessions(filterBy: string) {
    if (filterBy === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions
        .filter(s => s.level.toLowerCase() === filterBy);
    }
  }

  private sortSessions(sortBy: string) {
    if (sortBy === 'name') {
      this.visibleSessions.sort((s1, s2) => {
        if (s1.name > s2.name) {
          return 1;
        } else if (s1.name === s2.name) {
          return 0;
        } else {
          return -1;
        }
      });
    } else {
      this.visibleSessions.sort((s1, s2) =>
          s2.voters.length - s1.voters.length);
    }
  }
}
