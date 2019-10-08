import { Routes } from '@angular/router';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404/404.component';
import { CanActivateEventDetailsRouteGuard } from './events/event-details/event-details-rout-act.service';
import { CanDeactivateCreateEventRouteGuard } from './events/create-event/create-event-rout-deact.service';
import { EventListResolverService } from './events/event-list/event-list-resolver.service';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { EventResolverService } from './events/event-details/event-details-resolver.service';

export const appRoutes: Routes = [
  {
    path: '404',
    component: Error404Component
  },
  {
    path: 'events',
    component: EventListComponent,
    resolve: {
      events: EventListResolverService
    }
  },
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: [CanDeactivateCreateEventRouteGuard]
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    resolve: {
      event: EventResolverService
    }
  },
  {
    path: 'events/session/new',
    component: CreateSessionComponent
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
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
