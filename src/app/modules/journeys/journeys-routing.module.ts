import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneysRoutingModule {}
