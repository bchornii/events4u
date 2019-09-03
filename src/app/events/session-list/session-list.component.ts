import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../models/session.model';
import { VoterService } from '../upvote/voter.service';
import { AuthService } from 'src/app/users/auth.service';

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

  constructor(private voterService: VoterService,
              private authService: AuthService) { }

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortSessions(this.sortBy);
    }
  }

  toggleVote(session: ISession): void {
    const userName = this.authService.currentUser.userName;
    if (this.userHasVoted(session)) {
       this.voterService.deleteVoter(session, userName);
    } else {
      this.voterService.addVoter(session, userName);
    }

    if (this.sortBy === 'voters') {
      this.sortSessions(this.sortBy);
    }
  }

  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(session,
      this.authService.currentUser.userName);
  }

  get isUserAuthenticated(): boolean {
    return this.authService.isAuthenticated();
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
