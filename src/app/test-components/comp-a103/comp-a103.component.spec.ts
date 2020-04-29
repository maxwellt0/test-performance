import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA103Component } from './comp-a103.component';

describe('CompA103Component', () => {
  let component: CompA103Component;
  let fixture: ComponentFixture<CompA103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
