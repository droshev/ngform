import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { PlatformButtonModule } from '@fundamental-ngx/platform';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    PlatformButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
