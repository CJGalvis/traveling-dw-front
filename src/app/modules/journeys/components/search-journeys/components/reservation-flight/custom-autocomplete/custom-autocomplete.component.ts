import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";

@Component({
  selector: "app-custom-autocomplete",
  templateUrl: "./custom-autocomplete.component.html",
  styleUrls: ["./custom-autocomplete.component.scss"],
})
export class CustomAutocompleteComponent implements OnInit {
  @Input() label: string = "";
  @Input() icon: string = "";
  @Input() control: FormControl = new FormControl();
  @Input() options: Array<string> = [];
  public filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  selectedOption(event: any): void {
    console.log(event);
  }
}
