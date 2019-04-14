import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    RouterModule.forRoot([
      {
         path: 'app-root',
         component: AppComponent
      }
   ])
  ],
  providers: [],
  bootstrap: [NavigationComponent]
})
export class AppModule { }
