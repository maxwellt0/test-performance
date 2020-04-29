import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB140Component } from './comp-b140.component';

describe('CompB140Component', () => {
  let component: CompB140Component;
  let fixture: ComponentFixture<CompB140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
