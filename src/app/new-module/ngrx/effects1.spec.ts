import { async, TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of, ReplaySubject } from 'rxjs';
import { MyService } from '../my-service.service';
import { GetDataActionSuccess, RequestGetDataAction } from './actions';
import { Effects } from './effects';

describe('effects', () => {
    let effects: Effects;
    const actions = new ReplaySubject<Action>();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        providers: [
            Effects,
            {
                provide: MyService,
                useValue: jasmine.createSpyObj<MyService>(['send'])
            },
            {
                provide: Actions,
                useValue: actions
            }
        ]
        })
        .compileComponents();
    }));

    it('should return GetDataActionSuccess if service returns ok (replaysubject)', (done) => {
        // Arrange
        effects = TestBed.get(Effects);
        const service: jasmine.SpyObj<MyService> = TestBed.get(MyService);
        service.send.and.returnValue(of('test1'));
        const action = new RequestGetDataAction();

        // Action
        actions.next(action);

        // Asserts
        effects.requestGetData$.subscribe(a => {
            expect((<GetDataActionSuccess>a).payload).toBe('test1');
            done();
        });
    });
});
