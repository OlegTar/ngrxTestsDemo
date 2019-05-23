import { SHOW_ALERT, HIDE_ALERT, AlertActions } from './actions';

export interface AlertState {
    message: string;
}

export const initialState: AlertState = {
    message: null
};

export function reducer(state: AlertState = initialState, action: AlertActions): AlertState {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                message: action.payload
            };
        case HIDE_ALERT:
            return {
                ...state,
                message: null
            };
        default:
            return state;
    }
}

export const getMessage = (state: AlertState) => state.message;
