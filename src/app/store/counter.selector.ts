import {createSelector} from "@ngrx/store";

export const SELECT_COUNT = (state: { counter: number }) => state.counter;
export const SELECT_DOUBLE_COUNT = createSelector(SELECT_COUNT, (state) => state * 2);
