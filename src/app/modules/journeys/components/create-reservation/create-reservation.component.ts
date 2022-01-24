import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/app.reducer";
import { JourneysItems } from "../../models/JourneysItems";
import { JourneysService } from "../../services/journeys.service";
import * as journeysActions from "../../store/journeys.actions";
import Swal from 'sweetalert2'

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

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private journeysService: JourneysService
  ) {}

  ngOnDestroy(): void {
    this.subscriptionStore.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptionStore = this.store
      .select("journeys")
      .subscribe(({ journeysSelected }: any) => {
        if (journeysSelected) {
          this.journeysSelected = journeysSelected;
        } else {
          this.router.navigate(["/journeys/search"]);
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
    const reservation = {
      journeys: this.journeysSelected,
      name: this.reservationForm.get("name").value,
      lastname: this.reservationForm.get("lastname").value,
      identificationType: this.reservationForm.get("identificationType").value,
      identificationNumber: this.reservationForm.get("identificationNumber")
        .value,
    };

    this.journeysService.createReservation(reservation).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Reserva guardada con éxito',
          showConfirmButton: false,
          timer: 3000
        })
        this.store.dispatch(journeysActions.clearFilters());
        this.store.dispatch(journeysActions.clearJourneysItems());
        this.store.dispatch(journeysActions.clearJourneysSelected());
        this.router.navigate(["/journeys/search"]);
      },
      (error) => {}
    );
  }
}
