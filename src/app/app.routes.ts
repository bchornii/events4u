import { Routes } from '@angular/router';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404/404.component';
import { CanActivateEventDetailsRouteGuard } from './events/event-details/event-details-rout-act.service';
import { CanDeactivateCreateEventRouteGuard } from './events/create-event/create-event-rout-deact.service';

export const appRoutes: Routes = [
  {
    path: '404',
    component: Error404Component
  },
  {
    path: 'events',
    component: EventListComponent
  },
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: [CanDeactivateCreateEventRouteGuard]
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [CanActivateEventDetailsRouteGuard]
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/events',
    pathMatch: 'full'
  }
];
