import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';

import {MyErrorDirective} from './directives/directives.myerrordirective';
import { MyCustomeIfDirective } from './directives/directives.mycustomifdirective';
import { QuoteDirective} from './directives/directives-quotes/directives.mypoliticianquote';
import { QuotesComponent} from './directives/directives-quotes/quote.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMateriaSideNavComponent  } from './ng-materia-sidenav/ng-materia-sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NgMatTabComponent } from './ng-mat-tab/ng-mat-tab.component';
import { ObservablePrctcComponent } from './observable-prctc/observable-prctc.component';
import { Tab1SrvDataComponent } from './tab1-srv-data/tab1-srv-data.component';
import { Tab2SrvDataComponent } from './tab2-srv-data/tab2-srv-data.component';
import { Style1Component } from './servicesForSubjects/style1/style1.component';
import { Style2Component } from './servicesForSubjects/style2/style2.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ParentComponent } from './view-child/parent/parent.component';
import { CpRootComponentComponent } from './view-child/color-picker/cp-root-component/cp-root-component.component';
import { ColorSampleComponent } from './view-child/color-picker/color-sample/color-sample.component';
import { NgcontentCompComponent } from './ngContent/ngcontent-comp/ngcontent-comp.component';
import { NgcontentParentComponent } from './ngContent/ngcontent-parent/ngcontent-parent.component';
import { NgcontentFooterComponent } from './ngContent/ngcontent-footer/ngcontent-footer.component';



@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    MyErrorDirective,
    DependencyInjectionComponent,
    MyCustomeIfDirective,
    NgMateriaSideNavComponent,
    NgMatTabComponent,
    ObservablePrctcComponent,
    Tab1SrvDataComponent,
    Tab2SrvDataComponent,
    Style1Component,
    Style2Component,
    ViewChildComponent,
    ParentComponent,
    CpRootComponentComponent,
    ColorSampleComponent,
    QuotesComponent,
    QuoteDirective,
    NgcontentCompComponent,
    NgcontentParentComponent,
    NgcontentFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ],
  exports: [
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
