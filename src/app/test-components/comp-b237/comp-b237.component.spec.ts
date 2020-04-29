import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB237Component } from './comp-b237.component';

describe('CompB237Component', () => {
  let component: CompB237Component;
  let fixture: ComponentFixture<CompB237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
