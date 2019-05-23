import { async, TestBed } from '@angular/core/testing';
import { select, Store, StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { value } from './ngrx';
import { IncrementAction, SetAction } from './ngrx/actions';
import { AppState, reducers } from './reducers';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers)
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should increment value', () => {
    // Arrange
    const store: Store<AppState> = TestBed.get(Store);
    let oldValue;
    store.pipe(select(value)).subscribe(value_ => {
      oldValue = value_;
    });

    // Action
    store.dispatch(new IncrementAction());

    // Assert
    const newValue = store.pipe(select(value));
    newValue.subscribe(value_ => {
      expect(value_).toBe(oldValue + 1);
    });
  });

  it('should increment value, test 2', () => {
    // Arrange
    const store: Store<AppState> = TestBed.get(Store);
    store.dispatch(new SetAction(0));

    // Action
    store.dispatch(new IncrementAction());

    // Assert
    const newValue = store.pipe(select(value));
    newValue.subscribe(value_ => {
      expect(value_).toBe(1);
    });
  });
});
