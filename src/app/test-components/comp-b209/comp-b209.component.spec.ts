import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB209Component } from './comp-b209.component';

describe('CompB209Component', () => {
  let component: CompB209Component;
  let fixture: ComponentFixture<CompB209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
