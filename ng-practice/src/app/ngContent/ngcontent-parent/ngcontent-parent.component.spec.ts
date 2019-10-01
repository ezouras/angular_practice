import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentParentComponent } from './ngcontent-parent.component';

describe('NgcontentParentComponent', () => {
  let component: NgcontentParentComponent;
  let fixture: ComponentFixture<NgcontentParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcontentParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcontentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
