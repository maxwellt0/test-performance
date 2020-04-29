import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB69Component } from './comp-b69.component';

describe('CompB69Component', () => {
  let component: CompB69Component;
  let fixture: ComponentFixture<CompB69Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB69Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
