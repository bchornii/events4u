import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from '../event.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IEvent } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<IEvent[]> {

  constructor(private eventService: EventService) {}

  resolve(): Observable<IEvent[]> {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
