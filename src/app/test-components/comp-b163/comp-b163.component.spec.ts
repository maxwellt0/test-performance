import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB163Component } from './comp-b163.component';

describe('CompB163Component', () => {
  let component: CompB163Component;
  let fixture: ComponentFixture<CompB163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
