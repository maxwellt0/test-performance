import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB82Component } from './comp-b82.component';

describe('CompB82Component', () => {
  let component: CompB82Component;
  let fixture: ComponentFixture<CompB82Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB82Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
