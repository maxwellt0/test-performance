import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB88Component } from './comp-b88.component';

describe('CompB88Component', () => {
  let component: CompB88Component;
  let fixture: ComponentFixture<CompB88Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB88Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
