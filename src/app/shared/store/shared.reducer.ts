import { createReducer, on } from "@ngrx/store";
import { setNextUrl } from "./shared.actions";

export interface State {
  url: string;
}

export const initialState: State = {
  url: null,
};

const _sharedReducer = createReducer(
  initialState,
  on(setNextUrl, (state, { url }) => ({
    ...state,
    url: url,
  }))
);

export function sharedReducer(state, action) {
  return _sharedReducer(state, action);
}
