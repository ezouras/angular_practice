import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HighlightDirective} from './customeDirectives/highlight.directive'
import {BetterHighlightDirective} from './customeDirectives/better-highlight.directive'

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
