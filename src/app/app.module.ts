import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { NavigationComponent } from './navigation/navigation.component';
import { NewModule } from './new/new-module.module';
import { EffectsComponent } from './new/effects/effects.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { New2Module } from './new2/new2.module';
import { SampleComponent } from './new2/sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    RouterModule.forRoot([
      {
        path: 'app-root',
        component: AppComponent
      },
      {
        path: 'app-effects',
        component: EffectsComponent
      },
      {
        path: 'app-sample',
        component: SampleComponent
      }
    ]),
    NewModule,
    New2Module,
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [],
  bootstrap: [NavigationComponent]
})
export class AppModule { }
