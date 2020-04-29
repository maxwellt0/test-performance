import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB143Component } from './comp-b143.component';

describe('CompB143Component', () => {
  let component: CompB143Component;
  let fixture: ComponentFixture<CompB143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
