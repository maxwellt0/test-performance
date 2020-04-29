import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB57Component } from './comp-b57.component';

describe('CompB57Component', () => {
  let component: CompB57Component;
  let fixture: ComponentFixture<CompB57Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB57Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
