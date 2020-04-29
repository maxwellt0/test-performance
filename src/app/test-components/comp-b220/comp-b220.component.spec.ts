import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB220Component } from './comp-b220.component';

describe('CompB220Component', () => {
  let component: CompB220Component;
  let fixture: ComponentFixture<CompB220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
