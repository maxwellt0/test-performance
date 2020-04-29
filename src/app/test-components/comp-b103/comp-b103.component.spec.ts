import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB103Component } from './comp-b103.component';

describe('CompB103Component', () => {
  let component: CompB103Component;
  let fixture: ComponentFixture<CompB103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
