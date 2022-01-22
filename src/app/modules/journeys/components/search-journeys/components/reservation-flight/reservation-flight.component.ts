import { Component, OnInit } from "@angular/core";
import {
  FormControl,
} from "@angular/forms";

@Component({
  selector: "app-reservation-flight",
  templateUrl: "./reservation-flight.component.html",
  styleUrls: ["./reservation-flight.component.scss"],
})
export class ReservationFlightComponent implements OnInit {

  public options: string[] = ["Montería", "Cartagena", "Bogota"];
  public originControl = new FormControl();
  public destinationControl = new FormControl();
  public calendarControl = new FormControl();

  ngOnInit() {
  }
}
