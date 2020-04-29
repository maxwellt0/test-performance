import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB141Component } from './comp-b141.component';

describe('CompB141Component', () => {
  let component: CompB141Component;
  let fixture: ComponentFixture<CompB141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
