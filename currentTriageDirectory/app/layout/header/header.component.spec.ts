import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header.component';
import { ControlsComponent } from '../controls/controls.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FontAwesomeModule, RouterTestingModule ],
      declarations: [
        ControlsComponent,
        HeaderComponent,
        NavigationComponent,
        NavigationItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
