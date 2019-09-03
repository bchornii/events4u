import { Injectable } from '@angular/core';
import { ISession } from '../models/session.model';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor() { }

  deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter(v => v !== voterName);
  }

  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);
  }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some(v => v === voterName);
  }
}
