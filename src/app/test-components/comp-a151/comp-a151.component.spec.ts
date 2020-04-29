import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA151Component } from './comp-a151.component';

describe('CompA151Component', () => {
  let component: CompA151Component;
  let fixture: ComponentFixture<CompA151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
