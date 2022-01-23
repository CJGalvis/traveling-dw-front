import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/core/store/app.reducer";
import { FilterJourneys } from "src/app/modules/journeys/models/FilterJourneys";
import * as journeysActions from "src/app/modules/journeys/store/journeys.actions";

@Component({
  selector: "app-reservation-flight",
  templateUrl: "./reservation-flight.component.html",
  styleUrls: ["./reservation-flight.component.scss"],
})
export class ReservationFlightComponent implements OnInit {
  public options: string[] = ["Monteria", "Cartagena", "Bogota"];
  public isReturnControl = new FormControl(true);
  public isReturn: boolean = true;

  public reservationForm: FormGroup = new FormGroup({
    origin: new FormControl("", [Validators.required]),
    destination: new FormControl("", [Validators.required]),
    departureDate: new FormControl("", [Validators.required]),
    returnDate: new FormControl("", [Validators.required]),
    passengers: new FormControl("", [Validators.required]),
  });

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.getChangesIsReturnControl();
  }

  searchJourneys(): void {
    const queryParams: FilterJourneys = {
      origin: this.reservationForm.get("origin").value,
      destination: this.reservationForm.get("destination").value,
      departureDate: this.reservationForm.get("departureDate").value,
      returnDate: this.reservationForm.get("returnDate").value,
      isReturn: this.isReturn,
      passengers: this.reservationForm.get("passengers").value,
    };

    this.store.dispatch(
      journeysActions.setFilters({ filters: { ...queryParams } })
    );
    
    this.router.navigate([
      `journeys/results`,
    ]);
  }

  getValuesPassengers(event): void {
    console.log(event);
  }

  getChangesIsReturnControl(): void {
    this.isReturnControl.valueChanges.subscribe((value: any) => {
      this.isReturn = value;
      if (!this.isReturn) {
        this.reservationForm.removeControl("returnDate");
      } else {
        if (!this.reservationForm.get("returnDate")) {
          this.reservationForm.setControl(
            "returnDate",
            new FormControl("", Validators.required)
          );
        }
      }
    });
  }
}
