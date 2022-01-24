import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JourneysItems } from 'src/app/modules/journeys/models/JourneysItems';

@Component({
  selector: 'app-item-journey',
  templateUrl: './item-journey.component.html',
  styleUrls: ['./item-journey.component.scss']
})
export class ItemJourneyComponent implements OnInit {

  @Input() journey!: JourneysItems
  @Output() eventSelected: EventEmitter<JourneysItems> = new EventEmitter(null);

  constructor() { }

  ngOnInit(): void {
  }

  selectItem() {
    this.eventSelected.emit(this.journey);
  }

}
