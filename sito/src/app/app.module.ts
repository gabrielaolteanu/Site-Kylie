import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstBarComponent } from './components/first-bar/first-bar.component';
import { SecondBarComponent } from './components/second-bar/second-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonPrimaryComponent } from './buttons/button-primary/button-primary.component';

@NgModule({
  declarations: [
    AppComponent,
FirstBarComponent,
SecondBarComponent,
ButtonPrimaryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
