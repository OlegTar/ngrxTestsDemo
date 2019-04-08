import { Action } from '@ngrx/store';

export const INCREMENT = 'Increment Action';

class IncrementAction implements Action {
    type = INCREMENT;
    constructor () {}
}
