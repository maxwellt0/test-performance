import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB277Component } from './comp-b277.component';

describe('CompB277Component', () => {
  let component: CompB277Component;
  let fixture: ComponentFixture<CompB277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
