import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB287Component } from './comp-b287.component';

describe('CompB287Component', () => {
  let component: CompB287Component;
  let fixture: ComponentFixture<CompB287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
