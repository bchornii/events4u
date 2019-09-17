import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'e4u-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private router: Router,
              private eventService: EventService) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  canDeactivate(): boolean {
    return true;
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues)
      .subscribe(() => {
        this.router.navigate(['/events']);
      });
  }

}
