import { createSelector, createFeatureSelector } from '@ngrx/store';
import { NewModuleState } from './reducerMap';
import { getResult as getResult_ } from './reducer';

export const selectNewModuleState = createFeatureSelector<NewModuleState>('new-module');

export const getEffectsComponentState = createSelector(
    selectNewModuleState,
    state => state.effectsComponentState
);

export const getResult = createSelector(
    getEffectsComponentState,
    getResult_
);
