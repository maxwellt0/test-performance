import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB224Component } from './comp-b224.component';

describe('CompB224Component', () => {
  let component: CompB224Component;
  let fixture: ComponentFixture<CompB224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
