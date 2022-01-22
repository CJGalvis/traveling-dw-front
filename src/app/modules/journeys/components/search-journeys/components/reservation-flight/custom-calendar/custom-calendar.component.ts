import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-calendar',
  templateUrl: './custom-calendar.component.html',
  styleUrls: ['./custom-calendar.component.scss']
})
export class CustomCalendarComponent implements OnInit {

  @Input() label!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
