import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB273Component } from './comp-b273.component';

describe('CompB273Component', () => {
  let component: CompB273Component;
  let fixture: ComponentFixture<CompB273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
