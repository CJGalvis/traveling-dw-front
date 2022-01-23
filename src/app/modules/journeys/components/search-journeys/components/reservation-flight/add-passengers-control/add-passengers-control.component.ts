import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-add-passengers-control",
  templateUrl: "./add-passengers-control.component.html",
  styleUrls: ["./add-passengers-control.component.scss"],
})
export class AddPassengersControlComponent implements OnInit {
  @Input() titleControl!: string;
  @Input() subtitleControl!: string;
  @Input() count!: number;
  @Input() showTooltip: boolean = false;
  @Output() handlerCount: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  get disableButton(): boolean {
    return this.count <= 1;
  }

  subtract(): void {
    this.count -= 1;
    this.handlerCount.emit(this.count);
  }

  add(): void {
    this.count += 1;
    this.handlerCount.emit(this.count);
  }

  get tooltipDisabled(): string {
    return this.count <= 1 && this.showTooltip
      ? "Debe haber al menos 1 adulto"
      : "";
  }
}
