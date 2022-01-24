import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/app.reducer";
import { JourneysItems } from "../../models/JourneysItems";

@Component({
  selector: "app-create-reservation",
  templateUrl: "./create-reservation.component.html",
  styleUrls: ["./create-reservation.component.scss"],
})
export class CreateReservationComponent implements OnInit, OnDestroy {
  public reservationForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    identificationType: new FormControl("", [Validators.required]),
    identificationNumber: new FormControl("", [Validators.required]),
  });

  public journeysSelected: Array<JourneysItems> = [];
  private subscriptionStore: Subscription;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnDestroy(): void {
    this.subscriptionStore.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptionStore = this.store
      .select("journeys")
      .subscribe(({ journeysSelected }: any) => {
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

  saveReservation() {
    if (this.reservationForm.invalid) return;

  }
}
