import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/app.reducer";
import { JourneysItems } from "src/app/modules/journeys/models/JourneysItems";

@Component({
  selector: "app-item-journeys-selected",
  templateUrl: "./item-journeys-selected.component.html",
  styleUrls: ["./item-journeys-selected.component.scss"],
})
export class ItemJourneysSelectedComponent implements OnInit, OnDestroy {
  public journeysSelected: Array<JourneysItems> = [];
  private subscriptionStore: Subscription;
  public disabledButton: boolean;

  constructor(private store: Store<AppState>, private router: Router) {}
  ngOnDestroy(): void {
    this.subscriptionStore.unsubscribe();
  }

  ngOnInit(): void {
    this.getItemsSelected();
  }

  getItemsSelected() {
    this.subscriptionStore = this.store
      .select("journeys")
      .subscribe(({ journeysSelected, enablePay }: any) => {
        this.disabledButton = enablePay;
        if (journeysSelected) {
          this.journeysSelected = journeysSelected;
        }
      });
  }

  get totalPrice(): number {
    if (this.journeysSelected.length > 0) {
      return this.journeysSelected
        .map((item) => item.price)
        .reduce((previous, current) => previous + current);
    } else {
      return 0;
    }
  }

  reservationNavigate() {
    this.router.navigate(["/journeys/reservation"]);
  }
}
