import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentListComponent} from './department-list/department-list.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {PageNottFoundComponent} from './page-nott-found/page-nott-found.component';
import {DepartmentDetailComponent } from './department-detail/department-detail.component';
import {DepartmentOverviewComponent} from './department-overview/department-overview.component';
import {DepartmentContactComponent} from './department-contact/department-contact.component';
//define all routes for your application.
const routes: Routes = [
/*{
  path: '',
  component: DepartmentListComponent,
  children: []
},  instead of using a component, use a path*/
{
  path: '',
  redirectTo: '/departments',
  //pathMatch:"prefix",/ is a prefix to everything. so ay link will brin gyou
  //to departmens.
  pathMatch:"full"//this makes it so only the root goes here. everything else works.

},
  {
    path: 'departments',
    component: DepartmentListComponent,
    children: []
  },
  {
    path: 'employees',
    component: EmployeeListComponent,
    children: []
  },
  {//we want to add child routs to the DepartmentDetailComponent
    path: 'departments/:id',
    component: DepartmentDetailComponent,
    //two child routs, overviewand contact.
    children: [
    { path: "overview",component: DepartmentOverviewComponent,children: []},
    { path: "contact",component: DepartmentContactComponent,children: []}
    ]
  },
  {
    path: "**",
    component: PageNottFoundComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [DepartmentListComponent,
                                  EmployeeListComponent,
                                  DepartmentDetailComponent,
                                  PageNottFoundComponent,
                                DepartmentOverviewComponent,
                              DepartmentContactComponent];
