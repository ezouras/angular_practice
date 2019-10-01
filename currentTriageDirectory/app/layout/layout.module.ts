import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

import { ControlsComponent } from './controls/controls.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';
import { NavStatusService } from './nav-status.service';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  declarations: [
    ControlsComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    NavigationItemComponent
  ],
  providers: [NavStatusService],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavigationComponent
  ]
})
export class LayoutModule { }
