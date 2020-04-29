import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB119Component } from './comp-b119.component';

describe('CompB119Component', () => {
  let component: CompB119Component;
  let fixture: ComponentFixture<CompB119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
