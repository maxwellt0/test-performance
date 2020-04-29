import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA178Component } from './comp-a178.component';

describe('CompA178Component', () => {
  let component: CompA178Component;
  let fixture: ComponentFixture<CompA178Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA178Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
