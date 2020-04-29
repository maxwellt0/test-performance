import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB265Component } from './comp-b265.component';

describe('CompB265Component', () => {
  let component: CompB265Component;
  let fixture: ComponentFixture<CompB265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
