import { async, TestBed } from '@angular/core/testing';
import { MyService } from '../my-service.service';
import { Effects } from './effects';
import { RequestGetDataAction, GetDataActionSuccess } from './actions';
import { of, Subject } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

describe('effects', () => {
    let effects: Effects;
    const actions = new Subject<Action>();

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

    it('should return GetDataActionSuccess if service returns ok', (done) => {
        // Arrange
        effects = TestBed.get(Effects);
        const service: jasmine.SpyObj<MyService> = TestBed.get(MyService);
        service.send.and.returnValue(of('test1'));
        const action = new RequestGetDataAction();

        // Asserts
        effects.requestGetData$.subscribe(a => {
            expect((<GetDataActionSuccess>a).payload).toBe('test1');
            done();
        });

        // Action
        actions.next(action);
    });
});
