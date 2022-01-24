import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateReservationComponent } from "./components/create-reservation/create-reservation.component";
import { ResultsJourneysComponent } from "./components/results-journeys/results-journeys.component";
import { SearchJourneysComponent } from "./components/search-journeys/search-journeys.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "search",
    pathMatch: "full",
  },
  {
    path: "search",
    component: SearchJourneysComponent,
  },
  {
    path: "results/:origin/:destination/:departureDate/:returnDate/:isReturn/:passengers",
    component: ResultsJourneysComponent,
  },
  {
    path: 'reservation',
    component: CreateReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneysRoutingModule {}
