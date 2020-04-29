import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB100Component } from './comp-b100.component';

describe('CompB100Component', () => {
  let component: CompB100Component;
  let fixture: ComponentFixture<CompB100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
