import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public navLinks: Array<any>;
  public activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: "Viajes",
        link: "/journeys",
        index: 0,
      },
      {
        label: "Hoteles",
        link: "/hotels",
        index: 1,
      },
      {
        label: "Pasadías",
        link: "/picnic",
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
