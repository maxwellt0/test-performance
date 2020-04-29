import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB23Component } from './comp-b23.component';

describe('CompB23Component', () => {
  let component: CompB23Component;
  let fixture: ComponentFixture<CompB23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
