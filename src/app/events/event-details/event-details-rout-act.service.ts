import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../event.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateEventDetailsRouteGuard implements CanActivate {

  constructor(private eventService: EventService,
              private router: Router) {}

  canActivate(router: ActivatedRouteSnapshot): boolean {
    const id = +router.paramMap.get('id');
    const eventExists = !!this.eventService.getEvent(id);

    if (!eventExists) {
      this.router.navigate(['/404']);
    }

    return eventExists;
  }
}
