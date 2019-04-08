import { FeatureState, reducer } from './ngrx/reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    featureState: FeatureState;
}

export const reducers: ActionReducerMap<AppState> = {
    featureState: reducer
};
