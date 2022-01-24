import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchJourneysComponent } from "./components/search-journeys/search-journeys.component";
import { ResultsJourneysComponent } from "./components/results-journeys/results-journeys.component";
import { JourneysRoutingModule } from "./journeys-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { ReservationFlightComponent } from "./components/search-journeys/components/reservation-flight/reservation-flight.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomAutocompleteComponent } from "./components/search-journeys/components/reservation-flight/components/custom-autocomplete/custom-autocomplete.component";
import { CustomCalendarComponent } from "./components/search-journeys/components/reservation-flight/components/custom-calendar/custom-calendar.component";
import { SelectPassengersComponent } from "./components/search-journeys/components/reservation-flight/components/select-passengers/select-passengers.component";
import { ControlPassengersComponent } from "./components/search-journeys/components/reservation-flight/components/control-passengers/control-passengers.component";
import { AddPassengersControlComponent } from './components/search-journeys/components/reservation-flight/components/add-passengers-control/add-passengers-control.component';
import { ItemJourneyComponent } from './components/results-journeys/components/item-journey/item-journey.component';
import { FiltersJourneysComponent } from './components/results-journeys/components/filters-journeys/filters-journeys.component';
import { ItemJourneysSelectedComponent } from './components/results-journeys/components/item-journeys-selected/item-journeys-selected.component';
import { CreateReservationComponent } from './components/create-reservation/create-reservation.component';

@NgModule({
  declarations: [
    SearchJourneysComponent,
    ResultsJourneysComponent,
    ReservationFlightComponent,
    CustomAutocompleteComponent,
    CustomCalendarComponent,
    SelectPassengersComponent,
    ControlPassengersComponent,
    AddPassengersControlComponent,
    ItemJourneyComponent,
    FiltersJourneysComponent,
    ItemJourneysSelectedComponent,
    CreateReservationComponent,
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
