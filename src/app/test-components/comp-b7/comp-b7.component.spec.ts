import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB7Component } from './comp-b7.component';

describe('CompB7Component', () => {
  let component: CompB7Component;
  let fixture: ComponentFixture<CompB7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
