import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'e4u-event-list',
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleClick(){
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
