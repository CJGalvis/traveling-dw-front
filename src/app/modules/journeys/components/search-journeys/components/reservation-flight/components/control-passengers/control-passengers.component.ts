import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PassengersControl } from "src/app/modules/journeys/models/PassengersControl";

@Component({
  selector: "app-control-passengers",
  templateUrl: "./control-passengers.component.html",
  styleUrls: ["./control-passengers.component.scss"],
})
export class ControlPassengersComponent implements OnInit {
  public countAdult: number = 0;
  public countChild: number = 0;
  public countBabies: number = 0;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: PassengersControl
  ) {}

  ngOnInit(): void {
    this.countAdult = this.data.adult.value;
    this.countChild = this.data.child.value;
    this.countBabies = this.data.baby.value;
  }

  setValuesPassengers() {
    const data: PassengersControl = {
      adult: {
        label: "Adultos",
        value: this.countAdult,
      },
      child: {
        label: "Niños",
        value: this.countChild,
      },
      baby: {
        label: "Bebés",
        value: this.countBabies,
      },
    };
    this.dialogRef.close(data);
  }
}
