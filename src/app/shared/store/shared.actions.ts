import { createAction, props } from "@ngrx/store";

export const setNextUrl = createAction(
  "[Shared] setNextUrl",
  props<{ url: string }>()
);
