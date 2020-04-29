import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA53Component } from './comp-a53.component';

describe('CompA53Component', () => {
  let component: CompA53Component;
  let fixture: ComponentFixture<CompA53Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA53Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
