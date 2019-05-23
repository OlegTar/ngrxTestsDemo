import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, Scheduler, asyncScheduler } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HideAlertAction, SHOW_ALERT } from './actions';

@Injectable()
export class Effects {
    constructor(
        private actions$: Actions
    ) {}

    // @Effect()
    // showAlertAction$ = this.actions$.pipe(
    //     ofType(SHOW_ALERT),
    //     delay(2000),
    //     map(() => new HideAlertAction())
    // );

    @Effect()
    showAlertAction$: (time: number, scheduler: Scheduler) => Observable<Action> =
    (time = 2000, scheduler = asyncScheduler) => this.actions$.pipe(
        ofType(SHOW_ALERT),
        delay(time, scheduler),
        map(() => new HideAlertAction())
    )
}
