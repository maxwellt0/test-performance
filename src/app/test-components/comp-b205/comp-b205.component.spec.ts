import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB205Component } from './comp-b205.component';

describe('CompB205Component', () => {
  let component: CompB205Component;
  let fixture: ComponentFixture<CompB205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
