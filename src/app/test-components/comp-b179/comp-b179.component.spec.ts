import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB179Component } from './comp-b179.component';

describe('CompB179Component', () => {
  let component: CompB179Component;
  let fixture: ComponentFixture<CompB179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB179Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
