import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB236Component } from './comp-b236.component';

describe('CompB236Component', () => {
  let component: CompB236Component;
  let fixture: ComponentFixture<CompB236Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB236Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
