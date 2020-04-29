import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA164Component } from './comp-a164.component';

describe('CompA164Component', () => {
  let component: CompA164Component;
  let fixture: ComponentFixture<CompA164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
