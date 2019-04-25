import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { REQUEST_GET_DATA, GetDataActionSuccess, EffectError } from './actions';
import { MyService } from '../my-service.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class Effects {
    constructor(
        private actions$: Actions,
        private myService: MyService
    ) {}

    @Effect()
    requestGetData$ = this.actions$.pipe(
        ofType(REQUEST_GET_DATA),
        switchMap(action => {
            return this.myService.send().pipe(
                map(response => new GetDataActionSuccess(response)),
                catchError(() => of(new EffectError)),
            );
        })
    );
}
