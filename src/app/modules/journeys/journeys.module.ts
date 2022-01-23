import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchJourneysComponent } from "./components/search-journeys/search-journeys.component";
import { ResultsJourneysComponent } from "./components/results-journeys/results-journeys.component";
import { DetailJourneysComponent } from "./components/detail-journeys/detail-journeys.component";
import { JourneysRoutingModule } from "./journeys-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { ReservationFlightComponent } from "./components/search-journeys/components/reservation-flight/reservation-flight.component";
import { ManageReservationComponent } from "./components/search-journeys/components/manage-reservation/manage-reservation.component";
import { CheckInComponent } from "./components/search-journeys/components/check-in/check-in.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomAutocompleteComponent } from "./components/search-journeys/components/reservation-flight/custom-autocomplete/custom-autocomplete.component";
import { CustomCalendarComponent } from "./components/search-journeys/components/reservation-flight/custom-calendar/custom-calendar.component";
import { SelectPassengersComponent } from "./components/search-journeys/components/reservation-flight/select-passengers/select-passengers.component";
import { ControlPassengersComponent } from "./components/search-journeys/components/reservation-flight/control-passengers/control-passengers.component";
import { AddPassengersControlComponent } from './components/search-journeys/components/reservation-flight/add-passengers-control/add-passengers-control.component';
import { ItemJourneyComponent } from './components/results-journeys/components/item-journey/item-journey.component';
import { FiltersJourneysComponent } from './components/results-journeys/components/filters-journeys/filters-journeys.component';

@NgModule({
  declarations: [
    SearchJourneysComponent,
    ResultsJourneysComponent,
    DetailJourneysComponent,
    ReservationFlightComponent,
    ManageReservationComponent,
    CheckInComponent,
    CustomAutocompleteComponent,
    CustomCalendarComponent,
    SelectPassengersComponent,
    ControlPassengersComponent,
    AddPassengersControlComponent,
    ItemJourneyComponent,
    FiltersJourneysComponent,
  ],
  imports: [
    CommonModule,
    JourneysRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ControlPassengersComponent],
})
export class JourneysModule {}
