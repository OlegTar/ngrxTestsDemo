import { async, TestBed } from '@angular/core/testing';
import { Action, } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { of, Observable } from 'rxjs';
import { cold, hot } from 'jasmine-marbles';
import { MyService } from '../my-service.service';
import { GetDataActionSuccess, RequestGetDataAction } from './actions';
import { Effects } from './effects';

describe('effects', () => {
    let effects: Effects;
    let actions: Observable<Action>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        providers: [
            Effects,
            {
                provide: MyService,
                useValue: jasmine.createSpyObj<MyService>(['send'])
            },
            provideMockActions(() => actions)
        ]
        })
        .compileComponents();
    }));

    it('should return GetDataActionSuccess if service returns ok', () => {
        // Arrange
        effects = TestBed.get(Effects);
        const service: jasmine.SpyObj<MyService> = TestBed.get(MyService);
        service.send.and.returnValue(of('test1'));
        const action = new RequestGetDataAction();

        // Action
        actions = cold('a', {a: action});

        // Asserts
        const expected = cold('b', {b: new GetDataActionSuccess('test1')});
        expect(effects.requestGetData$).toBeObservable(expected);
    });
});
