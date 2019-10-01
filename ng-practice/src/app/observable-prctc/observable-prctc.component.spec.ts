import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablePrctcComponent } from './observable-prctc.component';

describe('ObservablePrctcComponent', () => {
  let component: ObservablePrctcComponent;
  let fixture: ComponentFixture<ObservablePrctcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablePrctcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablePrctcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
