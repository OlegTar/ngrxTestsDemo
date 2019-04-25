import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { EffectsComponent } from './effects.component';
import { StoreModule } from '@ngrx/store';
import { reducerMap } from '../ngrx/reducerMap';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from '../ngrx/effects';
import { MyService } from '../my-service.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { reducers } from 'src/app/reducers';

describe('EffectsComponent', () => {
  let component: EffectsComponent;
  let fixture: ComponentFixture<EffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectsComponent ],
      imports: [
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([]),
        StoreModule.forFeature('new-module', reducerMap),
        EffectsModule.forFeature([Effects]),
      ],
      providers: [
        {provide: MyService, useValue: jasmine.createSpyObj<MyService>(['send'])}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fill div.result if service returns ok', fakeAsync(() => {
    const service: jasmine.SpyObj<MyService> = TestBed.get(MyService);
    service.send.and.returnValue(of('test1'));

    component.send();
    tick(1);
    fixture.detectChanges();

    const div = fixture.debugElement.query(By.css('div.result'))
      .nativeElement as HTMLElement;
    expect(div.innerText).toBe('test1');
  }));
});
