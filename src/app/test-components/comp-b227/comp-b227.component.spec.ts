import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB227Component } from './comp-b227.component';

describe('CompB227Component', () => {
  let component: CompB227Component;
  let fixture: ComponentFixture<CompB227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
