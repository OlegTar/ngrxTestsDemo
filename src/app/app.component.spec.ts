import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { reducers, AppState } from './reducers';
import { StoreModule, Store, select } from '@ngrx/store';
import { value } from './ngrx';
import { IncrementAction, SetAction } from './ngrx/actions';
import { first } from 'rxjs/operators';

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
  
  it('should inrement value', () => {
    //Arrange
    const store: Store<AppState> = TestBed.get(Store);
    let oldValue;
    store.pipe(select(value), first()).subscribe(value => {
      oldValue = value;
    });

    //Action
    store.dispatch(new IncrementAction())
    
    //Assert
    const newValue = store.pipe(select(value));
    newValue.subscribe(value => {
      expect(value).toBe(oldValue + 1);
    })
  });

  it('should inrement value, test 2', () => {
    //Arrange
    const store: Store<AppState> = TestBed.get(Store);
    store.dispatch(new SetAction(0));

    //Action
    store.dispatch(new IncrementAction())
    
    //Assert
    const newValue = store.pipe(select(value));
    newValue.subscribe(value => {
      expect(value).toBe(1);
    })
  });
});
