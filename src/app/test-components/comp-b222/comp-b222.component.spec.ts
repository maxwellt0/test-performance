import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB222Component } from './comp-b222.component';

describe('CompB222Component', () => {
  let component: CompB222Component;
  let fixture: ComponentFixture<CompB222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
