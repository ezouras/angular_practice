import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AlertsComponent } from './alerts/alerts.component';
import { AlertsPanelComponent } from './alerts-panel/alerts-panel.component';

import { LayoutModule } from './layout/layout.module'
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    AlertsPanelComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([]),
    LayoutModule,
    ServicesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
