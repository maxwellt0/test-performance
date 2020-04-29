import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB67Component } from './comp-b67.component';

describe('CompB67Component', () => {
  let component: CompB67Component;
  let fixture: ComponentFixture<CompB67Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB67Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
