import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1SrvDataComponent } from './tab1-srv-data.component';

describe('Tab1SrvDataComponent', () => {
  let component: Tab1SrvDataComponent;
  let fixture: ComponentFixture<Tab1SrvDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1SrvDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1SrvDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
