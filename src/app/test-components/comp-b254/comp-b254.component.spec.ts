import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB254Component } from './comp-b254.component';

describe('CompB254Component', () => {
  let component: CompB254Component;
  let fixture: ComponentFixture<CompB254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
