import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB90Component } from './comp-b90.component';

describe('CompB90Component', () => {
  let component: CompB90Component;
  let fixture: ComponentFixture<CompB90Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB90Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
