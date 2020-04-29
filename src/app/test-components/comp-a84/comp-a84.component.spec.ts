import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA84Component } from './comp-a84.component';

describe('CompA84Component', () => {
  let component: CompA84Component;
  let fixture: ComponentFixture<CompA84Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA84Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
