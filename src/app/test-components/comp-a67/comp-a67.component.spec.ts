import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA67Component } from './comp-a67.component';

describe('CompA67Component', () => {
  let component: CompA67Component;
  let fixture: ComponentFixture<CompA67Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA67Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
