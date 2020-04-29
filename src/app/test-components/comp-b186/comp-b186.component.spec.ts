import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB186Component } from './comp-b186.component';

describe('CompB186Component', () => {
  let component: CompB186Component;
  let fixture: ComponentFixture<CompB186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
