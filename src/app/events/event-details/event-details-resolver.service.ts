import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from '../event.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IEvent } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<IEvent> {

  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IEvent> {
    const eventId = route.params.id;
    return this.eventService.getEvent(eventId);
  }
}
