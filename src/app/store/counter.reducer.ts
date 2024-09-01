import {createReducer, on} from "@ngrx/store";
import {DECREMENT, INCREMENT, SET} from "./counter.actions";

const initialState = 0;

export const COUNTER_REDUCER =
  createReducer(initialState,
    on(INCREMENT, (state, action) => state + action.value),
    on(SET, (state, action) => action.value),
    on(DECREMENT, (state, action) => state - action.value));
