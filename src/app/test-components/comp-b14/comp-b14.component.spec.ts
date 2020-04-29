import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB14Component } from './comp-b14.component';

describe('CompB14Component', () => {
  let component: CompB14Component;
  let fixture: ComponentFixture<CompB14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
