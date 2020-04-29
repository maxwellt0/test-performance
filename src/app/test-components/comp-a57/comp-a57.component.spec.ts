import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA57Component } from './comp-a57.component';

describe('CompA57Component', () => {
  let component: CompA57Component;
  let fixture: ComponentFixture<CompA57Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA57Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
