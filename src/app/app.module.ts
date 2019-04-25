import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { NavigationComponent } from './navigation/navigation.component';
import { NewModule } from './new-module/new-module.module';
import { EffectsComponent } from './new-module/effects/effects.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
      }
    ]),
    NewModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [],
  bootstrap: [NavigationComponent]
})
export class AppModule { }
