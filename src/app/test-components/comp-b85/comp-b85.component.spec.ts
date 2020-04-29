import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB85Component } from './comp-b85.component';

describe('CompB85Component', () => {
  let component: CompB85Component;
  let fixture: ComponentFixture<CompB85Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB85Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
