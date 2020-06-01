import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  notifiy = [{
    title: 'created ticket 72 - Attachment test',
    date: new Date(),
    path: 'assets/avatar_2.png'
  }, {
    title: 'Den Wentworth created ticket 70 - &#128516; &#128512; &#128518; &#128513;',
    date: new Date(),
    path: 'assets/avatar_1.png'
  }, {
    title: 'Den Wentworth created ticket 71 - Ticket with taga',
    date: new Date(),
    path: 'assets/avatar_1.png'
  }, {
    title: 'Den Wentworth created ticket 70 - Ticket with taga',
    date: new Date(),
    path: 'assets/avatar_1.png'
  }]
  constructor(
    private _ref: ElementRef
  ) { }

  ngOnInit(): void {
  }
}
