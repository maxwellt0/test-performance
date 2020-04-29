import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB117Component } from './comp-b117.component';

describe('CompB117Component', () => {
  let component: CompB117Component;
  let fixture: ComponentFixture<CompB117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
