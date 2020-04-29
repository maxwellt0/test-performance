import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA237Component } from './comp-a237.component';

describe('CompA237Component', () => {
  let component: CompA237Component;
  let fixture: ComponentFixture<CompA237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
