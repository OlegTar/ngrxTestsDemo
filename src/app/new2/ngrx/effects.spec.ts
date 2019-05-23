import { async, TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Effects } from './effects';
import { getTestScheduler, cold } from 'jasmine-marbles';
import { ShowAlertAction, HideAlertAction } from './actions';
import { TestScheduler } from 'rxjs/testing';

describe('effects', () => {
    let actions: Observable<Action>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        providers: [
            Effects,
            {
                provide: Actions,
                useValue: actions
            },
            provideMockActions(() => actions)
        ]
        })
        .compileComponents();
    }));

    it('should return HideAlertAction after 5 seconds after ShowAlert', () => {
        // Arrange
        const effects = TestBed.get(Effects);
        const scheduler = getTestScheduler(); // jasmine-marbles
        actions = cold('a', { a: new ShowAlertAction('test') });
        const expected = cold('-b', { b: new HideAlertAction() });
        expect(effects.showAlertAction$(10, scheduler)).toBeObservable(expected);
    });

    it('second: should return HideAlertAction after 5 seconds after ShowAlert', () => {
        // Arrange
        const effects = TestBed.get(Effects);
        const scheduler = new TestScheduler((a, e) => {
            expect(a).toEqual(e);
        });
        scheduler.run(helpers => {
            actions = cold('a', { a: new ShowAlertAction('test') });
            // actions = helpers.cold('a', { a: new ShowAlertAction('test') });
            helpers.expectObservable(effects.showAlertAction$()).toBe('2000ms b', {b: new HideAlertAction});
        });
    });
});
