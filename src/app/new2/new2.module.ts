import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducerMap } from './ngrx/reducerMap';
import { Effects } from './ngrx/effects';

@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('new2-module', reducerMap),
    EffectsModule.forFeature([Effects])
  ]
})
export class New2Module { }
