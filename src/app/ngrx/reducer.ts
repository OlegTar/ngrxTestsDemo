import { Action } from '@ngrx/store';
import { INCREMENT, SET, SetAction } from './actions';

export interface FeatureState {
    value: number;
}

export const initialState: FeatureState = {
    value: 0
};

export function reducer(state: FeatureState = initialState, action: Action) {
    switch (action.type) {
        case INCREMENT:
            return {
                value: state.value + 1
            };
        case SET: {
            return {
                value: (<SetAction>action).payload
            };
        }
    }
    return state;
}
