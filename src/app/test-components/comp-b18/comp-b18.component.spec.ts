import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB18Component } from './comp-b18.component';

describe('CompB18Component', () => {
  let component: CompB18Component;
  let fixture: ComponentFixture<CompB18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
