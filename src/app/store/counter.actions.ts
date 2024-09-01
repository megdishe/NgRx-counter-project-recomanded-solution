import {createAction, props} from "@ngrx/store";

export const INCREMENT = createAction('[Counter] INCREMENT', props<{ value: number }>());
export const DECREMENT = createAction('[Counter] DECREMENT');
