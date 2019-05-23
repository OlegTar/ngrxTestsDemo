import { Action } from '@ngrx/store';

export const SHOW_ALERT = 'show alert';
export const HIDE_ALERT = 'hide alert';

export class ShowAlertAction implements Action {
    type = SHOW_ALERT;
    constructor(public payload: string) {}
}

export class HideAlertAction implements Action {
    type = HIDE_ALERT;
    constructor(public payload: null = null) {}
}

export type AlertActions = ShowAlertAction | HideAlertAction;
