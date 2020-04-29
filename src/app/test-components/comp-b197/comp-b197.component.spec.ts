import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB197Component } from './comp-b197.component';

describe('CompB197Component', () => {
  let component: CompB197Component;
  let fixture: ComponentFixture<CompB197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
