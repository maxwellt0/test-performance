import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB25Component } from './comp-b25.component';

describe('CompB25Component', () => {
  let component: CompB25Component;
  let fixture: ComponentFixture<CompB25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
