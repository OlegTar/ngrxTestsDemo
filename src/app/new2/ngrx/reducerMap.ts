import { reducer, AlertState } from './reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface New2ModuleState {
    alertState: AlertState;
}

export const reducerMap: ActionReducerMap<New2ModuleState> = {
    alertState: reducer
};
