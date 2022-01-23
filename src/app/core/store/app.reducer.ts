import { ActionReducerMap } from "@ngrx/store";
import * as journeys from "../../modules/journeys/store/journeys.reducer";

export interface AppState {
  journeys: journeys.State;
}

export const appReducers: ActionReducerMap<AppState> = {
  journeys: journeys.journeysReducer,
};
