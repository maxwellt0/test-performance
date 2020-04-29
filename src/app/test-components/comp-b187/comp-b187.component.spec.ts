import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB187Component } from './comp-b187.component';

describe('CompB187Component', () => {
  let component: CompB187Component;
  let fixture: ComponentFixture<CompB187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
