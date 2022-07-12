import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsingCliComponent } from './using-cli/using-cli.component';
import { ManuallyCreatedComponent } from './manually-created/manually-created.component';
@NgModule({
  declarations: [
    AppComponent,
    UsingCliComponent,
    ManuallyCreatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
