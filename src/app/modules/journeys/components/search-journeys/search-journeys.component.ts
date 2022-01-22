import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-journeys",
  templateUrl: "./search-journeys.component.html",
  styleUrls: ["./search-journeys.component.scss"],
})
export class SearchJourneysComponent implements OnInit {
  public navLinks: Array<any>;
  public activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: "Reserva tu vuelo",
        link: "./reservation-flight",
        index: 0,
      },
      {
        label: "Gestiona tu reserva",
        link: "./manage-reservation",
        index: 1,
      },
      {
        label: "Check in",
        link: "./check-in",
        index: 2,
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === "." + this.router.url)
      );
    });
  }
}
