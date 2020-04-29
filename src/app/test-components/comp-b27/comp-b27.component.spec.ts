import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB27Component } from './comp-b27.component';

describe('CompB27Component', () => {
  let component: CompB27Component;
  let fixture: ComponentFixture<CompB27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
