import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewModuleState } from '../ngrx/reducerMap';
import { Store, select } from '@ngrx/store';
import { getResult } from '../ngrx';
import { RequestGetDataAction } from '../ngrx/actions';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.css']
})
export class EffectsComponent implements OnInit {
  result$: Observable<string>;

  constructor(private store: Store<NewModuleState>) { }

  ngOnInit() {
    this.result$ = this.store.pipe(select(getResult));
  }

  send() {
    this.store.dispatch(new RequestGetDataAction());
  }
}
