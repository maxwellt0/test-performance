import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB238Component } from './comp-b238.component';

describe('CompB238Component', () => {
  let component: CompB238Component;
  let fixture: ComponentFixture<CompB238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
