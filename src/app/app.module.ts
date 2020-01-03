import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    FooterComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
