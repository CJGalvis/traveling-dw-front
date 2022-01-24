import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { JourneysService } from "src/app/modules/journeys/services/journeys.service";

@Component({
  selector: "app-manage-reservation",
  templateUrl: "./manage-reservation.component.html",
  styleUrls: ["./manage-reservation.component.scss"],
})
export class ManageReservationComponent implements OnInit {
  public manageForm = new FormGroup({
    identificationNumber: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
  });
  public reservation: any;

  constructor(private journeysService: JourneysService) {}

  ngOnInit(): void {}

  getReservation() {
    if (this.manageForm.invalid) return;
    this.journeysService
      .getReservation({ ...this.manageForm.value })
      .subscribe((response: any) => {
        this.reservation = response.reservation;
      });
  }
}
