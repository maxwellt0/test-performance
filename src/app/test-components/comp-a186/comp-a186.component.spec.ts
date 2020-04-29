import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA186Component } from './comp-a186.component';

describe('CompA186Component', () => {
  let component: CompA186Component;
  let fixture: ComponentFixture<CompA186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
