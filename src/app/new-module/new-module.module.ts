import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsComponent } from './effects/effects.component';
import { StoreModule } from '@ngrx/store';
import { reducerMap } from './ngrx/reducerMap';
import { EffectsModule, Actions } from '@ngrx/effects';
import { Effects } from './ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { MyService } from './my-service.service';
import { MyServiceFake } from './my-service-fake';

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
export class NewModuleModule { }
