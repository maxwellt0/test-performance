import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB293Component } from './comp-b293.component';

describe('CompB293Component', () => {
  let component: CompB293Component;
  let fixture: ComponentFixture<CompB293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
