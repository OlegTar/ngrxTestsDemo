import { reducer, EffectsComponentState } from './reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface NewModuleState {
    effectsComponentState: EffectsComponentState;
}

export const reducerMap: ActionReducerMap<NewModuleState> = {
    effectsComponentState: reducer
};
