import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA266Component } from './comp-a266.component';

describe('CompA266Component', () => {
  let component: CompA266Component;
  let fixture: ComponentFixture<CompA266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
