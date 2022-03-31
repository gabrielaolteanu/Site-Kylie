import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstBarComponent } from './components/first-bar/first-bar.component';
import { SecondBarComponent } from './components/second-bar/second-bar.component';

@NgModule({
  declarations: [
    AppComponent,
FirstBarComponent,
SecondBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
