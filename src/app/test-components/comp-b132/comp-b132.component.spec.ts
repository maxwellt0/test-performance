import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB132Component } from './comp-b132.component';

describe('CompB132Component', () => {
  let component: CompB132Component;
  let fixture: ComponentFixture<CompB132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
