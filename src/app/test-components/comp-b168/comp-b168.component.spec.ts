import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB168Component } from './comp-b168.component';

describe('CompB168Component', () => {
  let component: CompB168Component;
  let fixture: ComponentFixture<CompB168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
