import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB232Component } from './comp-b232.component';

describe('CompB232Component', () => {
  let component: CompB232Component;
  let fixture: ComponentFixture<CompB232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
