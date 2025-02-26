import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [AsyncPipe]
})
export class CounterOutputComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select('counter');
  }

}
