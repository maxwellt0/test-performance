import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB60Component } from './comp-b60.component';

describe('CompB60Component', () => {
  let component: CompB60Component;
  let fixture: ComponentFixture<CompB60Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB60Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
