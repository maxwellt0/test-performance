import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB48Component } from './comp-b48.component';

describe('CompB48Component', () => {
  let component: CompB48Component;
  let fixture: ComponentFixture<CompB48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB48Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
