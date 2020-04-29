import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB96Component } from './comp-b96.component';

describe('CompB96Component', () => {
  let component: CompB96Component;
  let fixture: ComponentFixture<CompB96Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB96Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
