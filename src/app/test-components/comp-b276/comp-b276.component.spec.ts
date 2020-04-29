import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB276Component } from './comp-b276.component';

describe('CompB276Component', () => {
  let component: CompB276Component;
  let fixture: ComponentFixture<CompB276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
