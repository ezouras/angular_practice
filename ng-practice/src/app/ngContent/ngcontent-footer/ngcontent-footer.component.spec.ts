import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentFooterComponent } from './ngcontent-footer.component';

describe('NgcontentFooterComponent', () => {
  let component: NgcontentFooterComponent;
  let fixture: ComponentFixture<NgcontentFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcontentFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcontentFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
