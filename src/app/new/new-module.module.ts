import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EffectsComponent } from './effects/effects.component';
import { MyServiceFake } from './my-service-fake';
import { MyService } from './my-service.service';
import { Effects } from './ngrx/effects';
import { reducerMap } from './ngrx/reducerMap';

@NgModule({
  declarations: [EffectsComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    StoreModule.forFeature('new-module', reducerMap),
    EffectsModule.forFeature([Effects])
  ],
  providers: [{
    provide: MyService,
    useClass: MyServiceFake
  }]
})
export class NewModule { }
