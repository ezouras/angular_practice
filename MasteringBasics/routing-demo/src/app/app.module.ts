import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNottFoundComponent } from './page-nott-found/page-nott-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

//because we created a constant in the app-routing module that
//consists of an array of routing components. becasue we added it to the
//import statement above, we can remove the two below.

//import { DepartmentListComponent } from './department-list/department-list.component';
//import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    /* replace teh two below with the routing ocmponents
    DepartmentListComponent,
    EmployeeListComponent
    */
    routingComponents,
    PageNottFoundComponent,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
