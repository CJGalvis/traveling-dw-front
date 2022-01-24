import { createReducer, on } from "@ngrx/store";
import { FilterJourneys } from "../models/FilterJourneys";
import { JourneysItems } from "../models/JourneysItems";
import {
  setFilters,
  clearFilters,
  setJourneysItems,
  setJourneysSelected,
  enabledPay,
  clearJourneysItems,
  clearJourneysSelected,
} from "./journeys.actions";

export interface State {
  filters: FilterJourneys;
  journeysItems: Array<JourneysItems>;
  enablePay: boolean;
}

export const initialState: State = {
  filters: null,
  journeysItems: [],
  enablePay: false,
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
    journeysItems: [...journeysItems],
  })),

  on(clearJourneysItems, (state) => ({ ...state, journeysItems: [] })),

  on(setJourneysSelected, (state, { journeysSelected }) => ({
    ...state,
    journeysSelected: [...journeysSelected],
  })),

  on(clearJourneysSelected, (state) => ({ ...state, journeysSelected: [] })),

  on(enabledPay, (state) => ({ ...state, enablePay: true }))
);

export function journeysReducer(state, action) {
  return _journeysReducer(state, action);
}
