import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB193Component } from './comp-b193.component';

describe('CompB193Component', () => {
  let component: CompB193Component;
  let fixture: ComponentFixture<CompB193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
