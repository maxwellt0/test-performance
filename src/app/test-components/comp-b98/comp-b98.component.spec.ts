import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB98Component } from './comp-b98.component';

describe('CompB98Component', () => {
  let component: CompB98Component;
  let fixture: ComponentFixture<CompB98Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB98Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
