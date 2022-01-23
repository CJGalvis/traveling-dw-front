import { createAction, props } from "@ngrx/store";
import { FilterJourneys } from "../models/FilterJourneys";
import { JourneysItems } from "../models/JourneysItems";

export const setFilters = createAction(
  "[Journeys] setFilters",
  props<{ filters: FilterJourneys }>()
);

export const clearFilters = createAction("[Journeys] clearFilters");

export const setJourneysItems = createAction(
  "[Journeys] setJourneysItems",
  props<{ journeysItems: Array<JourneysItems> }>()
);
