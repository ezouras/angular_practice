import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMatTabComponent } from './ng-mat-tab.component';

describe('NgMatTabComponent', () => {
  let component: NgMatTabComponent;
  let fixture: ComponentFixture<NgMatTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMatTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMatTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
