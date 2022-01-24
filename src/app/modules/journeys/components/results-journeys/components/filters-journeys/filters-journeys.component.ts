import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/app.reducer";
import { FilterJourneys } from "src/app/modules/journeys/models/FilterJourneys";

@Component({
  selector: "app-filters-journeys",
  templateUrl: "./filters-journeys.component.html",
  styleUrls: ["./filters-journeys.component.scss"],
})
export class FiltersJourneysComponent implements OnInit, OnDestroy {
  public filters: FilterJourneys;

  private subscriptionStore: Subscription;

  public filtersJourneysForm = new FormGroup({
    origin: new FormControl(),
    destination: new FormControl(),
    departureDate: new FormControl(),
    returnDate: new FormControl(),
    passengers: new FormControl(),
  });

  constructor(private store: Store<AppState>) {}
  ngOnDestroy(): void {
    this.subscriptionStore.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptionStore = this.store
      .select("journeys")
      .subscribe(({ filters }: any) => {
        this.filters = filters;
        this.filtersJourneysForm.patchValue({ ...this.filters });
      });
  }
}
