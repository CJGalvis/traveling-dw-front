import { AfterViewChecked, ChangeDetectorRef, Component } from "@angular/core";
import { GlobalService } from "./shared/services/global.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewChecked {
  title = "traveling-front";

  constructor(
    public globalService: GlobalService,
    private cdRef: ChangeDetectorRef
  ) {}
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }
}
