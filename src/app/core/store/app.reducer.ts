import { ActionReducerMap } from "@ngrx/store";
import * as journeys from "../../modules/journeys/store/journeys.reducer";
import * as auth from "../../modules/auth/store/auth.reducer";
import * as shared from "../../shared/store/shared.reducer";

export interface AppState {
  journeys: journeys.State;
  auth: auth.State;
  shared: shared.State;
}

export const appReducers: ActionReducerMap<AppState> = {
  journeys: journeys.journeysReducer,
  auth: auth.authReducer,
  shared: shared.sharedReducer,
};
