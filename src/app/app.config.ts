import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from '@ngrx/store';
import {COUNTER_REDUCER} from "./store/counter.reducer";
import {provideEffects} from '@ngrx/effects';
import {CounterEffects} from "./store/counter.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideStore({counter: COUNTER_REDUCER}),
    provideEffects(CounterEffects)
  ]
};
