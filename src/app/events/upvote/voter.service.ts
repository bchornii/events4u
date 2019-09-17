import { Injectable } from '@angular/core';
import { ISession } from '../models/session.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  deleteVoter(eventId: number, session: ISession, voterName: string) {
    session.voters = session.voters.filter(v => v !== voterName);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.delete(url).pipe(
      catchError(this.handleError('addVoter'))
    ).subscribe();
  }

  addVoter(eventId: number, session: ISession, voterName: string) {
    session.voters.push(voterName);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.post(url, {}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      catchError(this.handleError('addVoter'))
    ).subscribe();
  }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some(v => v === voterName);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
