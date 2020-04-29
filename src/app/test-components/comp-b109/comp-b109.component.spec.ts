import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB109Component } from './comp-b109.component';

describe('CompB109Component', () => {
  let component: CompB109Component;
  let fixture: ComponentFixture<CompB109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
