import {Actions, createEffect, ofType} from "@ngrx/effects";
import {DECREMENT, INCREMENT, INIT, SET} from "./counter.actions";
import {of, switchMap, tap, withLatestFrom} from "rxjs";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {SELECT_COUNT} from "./counter.selector";

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions,
              private store: Store<{ counter: number }>) {
  }

  saveCount$ = createEffect(() => this.actions$.pipe(
    ofType(INCREMENT, DECREMENT),
    withLatestFrom(this.store.select(SELECT_COUNT)),
    tap(([action, counter]) => {
      console.log(action);
      localStorage.setItem('count', counter.toString());
    })
  ), {dispatch: false, functional: true});

  loadCount$ = createEffect(() => this.actions$
    .pipe(
      ofType(INIT),
      switchMap(() => {
        const storedCounter = localStorage.getItem('count');
        console.log('hello from load counter', storedCounter);
        if (storedCounter) {
          return of(SET({value: +storedCounter}));
        }
        return of(SET({value: 0}));
      })
    ), {functional: true});


}
