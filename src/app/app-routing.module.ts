import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "journeys",
    pathMatch: "full",
  },
  {
    path: "journeys",
    loadChildren: () =>
      import("./modules/journeys/journeys.module").then(
        (m) => m.JourneysModule
      ),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./modules/auth/auth.module").then(
        (m) => m.AuthModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
