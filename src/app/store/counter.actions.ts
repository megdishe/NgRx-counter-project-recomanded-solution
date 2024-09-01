import {createAction, props} from "@ngrx/store";

export const INCREMENT = createAction('[Counter] INCREMENT', props<{ value: number }>());
export const DECREMENT = createAction('[Counter] DECREMENT', props<{ value: number }>());
export const INIT = createAction('[Counter] INIT');
export const SET = createAction('[Counter] SET', props<{ value: number }>());
