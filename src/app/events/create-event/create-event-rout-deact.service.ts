
import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { CreateEventComponent } from './create-event.component';
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateCreateEventRouteGuard implements CanDeactivate<CreateEventComponent> {
  canDeactivate(component: CreateEventComponent): boolean {
    return component.canDeactivate();
  }
}
