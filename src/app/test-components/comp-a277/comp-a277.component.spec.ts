import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA277Component } from './comp-a277.component';

describe('CompA277Component', () => {
  let component: CompA277Component;
  let fixture: ComponentFixture<CompA277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
