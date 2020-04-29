import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB267Component } from './comp-b267.component';

describe('CompB267Component', () => {
  let component: CompB267Component;
  let fixture: ComponentFixture<CompB267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
