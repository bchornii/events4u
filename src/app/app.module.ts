import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404/404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { SessionListComponent } from './events/session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { DurationPipe } from './events/duration.pipe';
import { JQ_TOKEN } from './common/jquery-service/jQuery.service';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger/modal-trigger.directive';
import { UpvoteComponent } from './events/upvote/upvote.component';

let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }) // ToastrModule added
  ],
  providers: [
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
