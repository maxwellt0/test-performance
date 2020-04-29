import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB130Component } from './comp-b130.component';

describe('CompB130Component', () => {
  let component: CompB130Component;
  let fixture: ComponentFixture<CompB130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
