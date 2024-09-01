import {createReducer, on} from "@ngrx/store";
import {DECREMENT, INCREMENT} from "./counter.actions";

const initialState = 0;

export const COUNTER_REDUCER =
  createReducer(initialState,
    on(INCREMENT, (state, action) => state + action.value),
    on(DECREMENT, (state) => state - 1));
