import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoemsComponent } from './poems.component';
import { HeaderComponent } from './nav_header/nav_header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeLogoComponent } from './welcome-logo/welcome-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    PoemsComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
