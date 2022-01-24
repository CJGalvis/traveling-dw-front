import { createReducer, on } from "@ngrx/store";
import { setToken, clearToken } from "./auth.actions";

export interface State {
  token: string;
}

export const initialState: State = {
  token: null,
};

const _authReducer = createReducer(
  initialState,
  on(setToken, (state, { token }) => ({
    ...state,
    token: token,
  })),

  on(clearToken, (state) => ({ ...state, token: null }))
);

export function authReducer(state, action) {
  return _authReducer(state, action);
}
