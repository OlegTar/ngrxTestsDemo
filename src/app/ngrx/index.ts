import { createSelector } from '@ngrx/store';
import { FeatureState } from './reducer';
import { AppState } from '../reducers';

export const selectFeatureState = (state: AppState) => state.featureState;

export const selectValue = createSelector(
  selectFeatureState,
  (state: FeatureState) => state.value
);
