import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirstBarComponent } from './components/first-bar/first-bar.component';
import { SecondBarComponent } from './components/second-bar/second-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonPrimaryComponent } from './buttons/button-primary/button-primary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstHomeComponent } from './components-home/first-home/first-home.component';
import { LinkKimComponent } from './components/link-kim/link-kim.component';
import { LinkStormiComponent } from './components/link-stormi/link-stormi.component';
import { AppRoutingModule } from './app-routing.module';
import { LinkGabriComponent } from './components/link-gabri/link-gabri.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { FavoriteComponent } from './components-home/favorite/favorite.component';
import { HomeComponent } from './components-home/home/home.component';
import { SecondHomeComponent } from './components-home/second-home/second-home.component';

@NgModule({
  declarations: [
    AppComponent,
FirstBarComponent,
SecondBarComponent,
ButtonPrimaryComponent,
FirstHomeComponent,
LinkKimComponent,
LinkStormiComponent,
LinkGabriComponent,
ButtonComponent,
FooterComponent,
FavoriteComponent,
HomeComponent,
SecondHomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
