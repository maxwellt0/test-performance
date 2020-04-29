import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA36Component } from './comp-a36.component';

describe('CompA36Component', () => {
  let component: CompA36Component;
  let fixture: ComponentFixture<CompA36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
