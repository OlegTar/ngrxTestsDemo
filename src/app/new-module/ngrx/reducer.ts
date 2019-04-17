import { Action } from '@ngrx/store';
import { GET_DATA_SUCCESS, GetDataActionSuccess } from './actions';

export interface EffectsComponentState {
    result: string;
}

export const initialState: EffectsComponentState = {
    result: null
};

export function reducer(state: EffectsComponentState = initialState, action: Action): EffectsComponentState {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {
                result: (<GetDataActionSuccess>action).payload
            };
    }
    return state;
}

export const getResult = (state: EffectsComponentState) => state.result;
