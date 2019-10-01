import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2SrvDataComponent } from './tab2-srv-data.component';

describe('Tab2SrvDataComponent', () => {
  let component: Tab2SrvDataComponent;
  let fixture: ComponentFixture<Tab2SrvDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2SrvDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2SrvDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
