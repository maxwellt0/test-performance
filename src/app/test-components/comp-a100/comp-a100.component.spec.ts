import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA100Component } from './comp-a100.component';

describe('CompA100Component', () => {
  let component: CompA100Component;
  let fixture: ComponentFixture<CompA100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
