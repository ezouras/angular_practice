import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNottFoundComponent } from './page-nott-found.component';

describe('PageNottFoundComponent', () => {
  let component: PageNottFoundComponent;
  let fixture: ComponentFixture<PageNottFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNottFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNottFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
