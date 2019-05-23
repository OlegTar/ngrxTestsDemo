import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { New2ModuleState } from '../ngrx/reducerMap';
import { Observable } from 'rxjs';
import { getMessage } from '../ngrx';
import { ShowAlertAction } from '../ngrx/actions';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  message$: Observable<string>;
  constructor(private store: Store<New2ModuleState>) { }

  ngOnInit() {
    this.message$ = this.store.pipe(select(getMessage));
  }

  showAlert() {
    this.store.dispatch(new ShowAlertAction('message'));
  }
}
