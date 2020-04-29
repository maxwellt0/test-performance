import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB230Component } from './comp-b230.component';

describe('CompB230Component', () => {
  let component: CompB230Component;
  let fixture: ComponentFixture<CompB230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB230Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
