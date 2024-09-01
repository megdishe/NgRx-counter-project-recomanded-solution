import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CounterOutputComponent} from "./counter-output/counter-output.component";
import {CounterControlsComponent} from "./counter-controls/counter-controls.component";
import {Store} from "@ngrx/store";
import {INIT} from "./store/counter.actions";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterOutputComponent, CounterControlsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'store-app';

  constructor(private store: Store<{ counter: number }>) {
  }

  ngOnInit(): void {
    console.log("in the parent ")
    this.store.dispatch(INIT())
  }
}
