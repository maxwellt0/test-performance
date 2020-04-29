import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB164Component } from './comp-b164.component';

describe('CompB164Component', () => {
  let component: CompB164Component;
  let fixture: ComponentFixture<CompB164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
