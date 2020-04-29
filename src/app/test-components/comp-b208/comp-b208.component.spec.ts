import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB208Component } from './comp-b208.component';

describe('CompB208Component', () => {
  let component: CompB208Component;
  let fixture: ComponentFixture<CompB208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
