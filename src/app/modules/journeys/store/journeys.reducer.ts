import { createReducer, on } from "@ngrx/store";
import { FilterJourneys } from "../models/FilterJourneys";
import { JourneysItems } from "../models/JourneysItems";
import { setFilters, clearFilters, setJourneysItems } from "./journeys.actions";

export interface State {
  filters: FilterJourneys;
  journeysItems: Array<JourneysItems>;
}

export const initialState: State = {
  filters: null,
  journeysItems: [],
};

const _journeysReducer = createReducer(
  initialState,
  on(setFilters, (state, { filters }) => ({
    ...state,
    filters: { ...filters },
  })),

  on(clearFilters, (state) => ({ ...state, filters: null })),

  on(setJourneysItems, (state, { journeysItems }) => ({
    ...state,
    journeysItems: { ...journeysItems },
  }))
);

export function journeysReducer(state, action) {
  return _journeysReducer(state, action);
}
