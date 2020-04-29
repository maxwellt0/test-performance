import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB9Component } from './comp-b9.component';

describe('CompB9Component', () => {
  let component: CompB9Component;
  let fixture: ComponentFixture<CompB9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
