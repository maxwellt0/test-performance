import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB214Component } from './comp-b214.component';

describe('CompB214Component', () => {
  let component: CompB214Component;
  let fixture: ComponentFixture<CompB214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
