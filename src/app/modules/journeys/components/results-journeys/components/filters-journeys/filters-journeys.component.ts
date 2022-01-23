import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FilterJourneys } from "src/app/modules/journeys/models/FilterJourneys";

@Component({
  selector: "app-filters-journeys",
  templateUrl: "./filters-journeys.component.html",
  styleUrls: ["./filters-journeys.component.scss"],
})
export class FiltersJourneysComponent implements OnInit {
  @Input() isReturn: boolean;
  @Input() filters: FilterJourneys = {};

  public filtersJourneys = new FormGroup({
    origin: new FormControl(),
    destination: new FormControl(),
    departureDate: new FormControl(),
    returnDate: new FormControl(),
    passengers: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {
    this.filtersJourneys.patchValue(this.filters);
  }
}
