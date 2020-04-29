import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB299Component } from './comp-b299.component';

describe('CompB299Component', () => {
  let component: CompB299Component;
  let fixture: ComponentFixture<CompB299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
