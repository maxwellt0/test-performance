import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB292Component } from './comp-b292.component';

describe('CompB292Component', () => {
  let component: CompB292Component;
  let fixture: ComponentFixture<CompB292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
