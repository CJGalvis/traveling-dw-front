import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/core/store/app.reducer";
import { FilterJourneys } from "../../models/FilterJourneys";
import { JourneysService } from "../../services/journeys.service";
import * as journeysActions from "../../store/journeys.actions";
import { JourneysItems } from "../../models/JourneysItems";

@Component({
  selector: "app-results-journeys",
  templateUrl: "./results-journeys.component.html",
  styleUrls: ["./results-journeys.component.scss"],
})
export class ResultsJourneysComponent implements OnInit, OnDestroy {
  public journeys: Array<JourneysItems> = [];
  public journeysSelected: Array<JourneysItems> = [];
  public filterSelected: FilterJourneys;
  private onReturn: boolean;

  constructor(
    private journeysService: JourneysService,
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.getJourneyForFilter(params);
  }

  getJourneyForFilter(params: FilterJourneys) {
    this.filterSelected = params;
    this.store.dispatch(journeysActions.setFilters({ filters: { ...params } }));
    this.journeysService.getJourneys(params).subscribe((response: any) => {
      this.journeys = response.items;
      this.store.dispatch(
        journeysActions.setJourneysItems({
          journeysItems: [...this.journeys],
        })
      );
    });
  }

  getLabel() {
    return this.filterSelected.isReturn && this.onReturn ? "Regreso" : "Salida";
  }

  getSelectedItem(event: JourneysItems) {
    this.journeysSelected.push(event);
    if (this.filterSelected.isReturn) {
      if (this.journeysSelected.length <= 2) {
        this.store.dispatch(
          journeysActions.setJourneysSelected({
            journeysSelected: [...this.journeysSelected],
          })
        );

        if (this.journeysSelected.length == 2) {
          this.store.dispatch(journeysActions.enabledPay());
        }
      }

      if (this.journeysSelected.length < 2) {
        const queryParams: FilterJourneys = {
          origin: this.filterSelected.destination,
          destination: this.filterSelected.origin,
          departureDate: this.filterSelected.returnDate,
          returnDate: this.filterSelected.departureDate,
          isReturn: this.filterSelected.isReturn,
          passengers: this.filterSelected.passengers,
        };
        this.getJourneyForFilter(queryParams);
      }
    } else {
      if (this.journeysSelected.length <= 1) {
        this.store.dispatch(
          journeysActions.setJourneysSelected({
            journeysSelected: [...this.journeysSelected],
          })
        );

        if (this.journeysSelected.length == 1) {
          this.store.dispatch(journeysActions.enabledPay());
        }
      }
    }
  }
}
