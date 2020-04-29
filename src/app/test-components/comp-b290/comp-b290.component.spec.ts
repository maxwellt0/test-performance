import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB290Component } from './comp-b290.component';

describe('CompB290Component', () => {
  let component: CompB290Component;
  let fixture: ComponentFixture<CompB290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB290Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
