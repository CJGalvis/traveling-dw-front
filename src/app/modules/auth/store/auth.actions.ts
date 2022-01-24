import { createAction, props } from "@ngrx/store";

export const setToken = createAction(
  "[Auth] seToken",
  props<{ token: string }>()
);

export const clearToken = createAction("[Auth] clearToken");
