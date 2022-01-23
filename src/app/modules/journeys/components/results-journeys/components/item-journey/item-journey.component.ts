import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-journey',
  templateUrl: './item-journey.component.html',
  styleUrls: ['./item-journey.component.scss']
})
export class ItemJourneyComponent implements OnInit {

  @Input() journey!: any

  constructor() { }

  ngOnInit(): void {
  }

}
