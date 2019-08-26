import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../models/event.model';

@Component({
  selector: 'e4u-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['/event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;

  constructor() { }

  ngOnInit() {
  }

  getEventTimeStyles() {
    const isEarly = this.event && this.event.time === '8:00 am' ;
    if (isEarly) {
      return ['green-color', 'bold-font'];
    }
    return [];
  }

}
