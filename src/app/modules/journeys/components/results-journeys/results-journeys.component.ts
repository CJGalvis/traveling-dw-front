import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/core/store/app.reducer";
import { FilterJourneys } from "../../models/FilterJourneys";
import { JourneysService } from "../../services/journeys.service";
import { State } from "../../store/journeys.reducer";
import * as journeysActions from "../../store/journeys.actions";
import { JourneysItems } from "../../models/JourneysItems";

@Component({
  selector: "app-results-journeys",
  templateUrl: "./results-journeys.component.html",
  styleUrls: ["./results-journeys.component.scss"],
})
export class ResultsJourneysComponent implements OnInit {
  public journeys: Array<JourneysItems> = [];
  public filterSelected: FilterJourneys;

  constructor(
    private journeysService: JourneysService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.select("journeys").subscribe((reducer: State) => {
      this.filterSelected = reducer.filters;
      if (!this.filterSelected) {
        this.router.navigate(["/journeys/search"]);
        return;
      }
      this.journeysService
        .getJourneys(this.filterSelected)
        .subscribe((response: any) => {
          this.journeys = response.items;
          this.store.dispatch(
            journeysActions.setJourneysItems({
              journeysItems: { ...this.journeys },
            })
          );
        });
    });
  }
}
