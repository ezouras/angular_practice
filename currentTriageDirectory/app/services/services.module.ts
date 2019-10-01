import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardViewComponent } from './card-view/card-view.component';
import { OverviewComponent } from './overview/overview.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { ServiceDataService } from './service-data.service';
import { ServiceHealthCountComponent } from './service-health-count/service-health-count.component';
import { ServiceHealthService } from './service-health.service';
import { ServicesComponent } from './services.component';
import { UnhealthyServiceTableComponent } from './unhealthy-service-table/unhealthy-service-table.component';

const serviceRoutes: Routes = [
  { path: 'services', component: ServicesComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'list', component: CardViewComponent },
    ]
  },
  { path: '**', redirectTo: '/services/overview', pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(serviceRoutes)
  ],
  providers: [ ServiceHealthService ],
  declarations: [
    ServicesComponent,
    UnhealthyServiceTableComponent,
    ServiceHealthCountComponent,
    OverviewComponent,
    CardViewComponent,
    ServiceCardComponent
  ],
})
export class ServicesModule { }
