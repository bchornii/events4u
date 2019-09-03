import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'e4u-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() count: number;
  @Input() set voted(value) {
    this.iconColor = value ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();

  iconColor: string;

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.vote.emit({});
  }

}
