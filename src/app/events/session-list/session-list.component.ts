import { Component, OnInit, Input } from '@angular/core';
import { ISession } from '../models/session.model';

@Component({
  selector: 'e4u-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  @Input() sessions: ISession[];

  constructor() { }

  ngOnInit() {
  }

}
