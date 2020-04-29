import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB6Component } from './comp-b6.component';

describe('CompB6Component', () => {
  let component: CompB6Component;
  let fixture: ComponentFixture<CompB6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
