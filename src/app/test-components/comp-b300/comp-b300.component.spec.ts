import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB300Component } from './comp-b300.component';

describe('CompB300Component', () => {
  let component: CompB300Component;
  let fixture: ComponentFixture<CompB300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
