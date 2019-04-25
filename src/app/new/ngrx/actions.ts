import { Action } from '@ngrx/store';

export const REQUEST_GET_DATA = 'request get data';
export const GET_DATA_SUCCESS = 'get data success';

export class RequestGetDataAction implements Action {
    type = REQUEST_GET_DATA;
    constructor() {}
}

export class GetDataActionSuccess implements Action {
    type = GET_DATA_SUCCESS;

    constructor(public payload: string) {}
}

export class EffectError implements Action {
    type = 'error';
}
