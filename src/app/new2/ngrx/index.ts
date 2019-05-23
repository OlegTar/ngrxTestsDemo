import { createSelector, createFeatureSelector } from '@ngrx/store';
import { New2ModuleState } from './reducerMap';
import { getMessage as getMessage_} from './reducer';

export const selectNewModuleState = createFeatureSelector<New2ModuleState>('new2-module');

export const getAlertState = createSelector(
    selectNewModuleState,
    state => state.alertState
);

export const getMessage = createSelector(
    getAlertState,
    getMessage_
);
