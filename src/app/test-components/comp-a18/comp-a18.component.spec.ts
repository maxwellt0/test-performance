import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA18Component } from './comp-a18.component';

describe('CompA18Component', () => {
  let component: CompA18Component;
  let fixture: ComponentFixture<CompA18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
