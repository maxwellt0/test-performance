import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB38Component } from './comp-b38.component';

describe('CompB38Component', () => {
  let component: CompB38Component;
  let fixture: ComponentFixture<CompB38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB38Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
