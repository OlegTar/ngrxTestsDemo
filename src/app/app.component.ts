import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectValue } from './ngrx';
import { AppState } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  value: number;
  subscription = new Subscription();

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.subscription.add(this.store.pipe(select(selectValue)).subscribe(value => {
      this.value = value;
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
