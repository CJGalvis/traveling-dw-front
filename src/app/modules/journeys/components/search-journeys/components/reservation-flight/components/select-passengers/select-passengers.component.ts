import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { PassengersControl } from "src/app/modules/journeys/models/PassengersControl";
import { ControlPassengersComponent } from "../control-passengers/control-passengers.component";

@Component({
  selector: "app-select-passengers",
  templateUrl: "./select-passengers.component.html",
  styleUrls: ["./select-passengers.component.scss"],
})
export class SelectPassengersComponent implements OnInit {
  @Input() controlName = "";
  @Input() parentForm = new FormGroup({});
  @Output() eventSelected: EventEmitter<any> = new EventEmitter();
  private currentValuesPassengers: PassengersControl = {
    adult: {
      label: "Adultos",
      value: 1,
    },
    child: {
      label: "Niños",
      value: 0,
    },
    baby: {
      label: "Bebés",
      value: 0,
    },
  };

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.handlerValuesPassengers(this.currentValuesPassengers);
  }

  openDialogSelect(): void {
    const dialogRef = this.dialog.open(ControlPassengersComponent, {
      width: "30%",
      data: this.currentValuesPassengers,
    });

    dialogRef.afterClosed().subscribe((result: PassengersControl) => {
      if (result) {
        this.currentValuesPassengers = result;
        this.eventSelected.emit(this.currentValuesPassengers);
        this.handlerValuesPassengers(result);
      }
    });
  }

  get control(): FormControl {
    return this.parentForm.get(this.controlName) as FormControl;
  }

  handlerValuesPassengers(data: PassengersControl): void {
    let values = "";
    Object.keys(data).forEach((prop, index) => {
      if (data[prop].value > 0) {
        values += `${data[prop].value} ${data[prop].label} `;
      }
    });
    this.parentForm.get(this.controlName).setValue(values);
  }
}
