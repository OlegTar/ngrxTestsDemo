import { Action } from '@ngrx/store';

export const INCREMENT = 'Increment Action';
export const SET = 'Set Action';

export class IncrementAction implements Action {
    type = INCREMENT;
    constructor () {}
}

export class SetAction implements Action {
    type = SET;
    constructor (public payload: number) {}
}
