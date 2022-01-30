import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    ErrorAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
