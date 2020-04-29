import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB291Component } from './comp-b291.component';

describe('CompB291Component', () => {
  let component: CompB291Component;
  let fixture: ComponentFixture<CompB291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
