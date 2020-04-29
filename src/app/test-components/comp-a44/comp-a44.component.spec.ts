import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA44Component } from './comp-a44.component';

describe('CompA44Component', () => {
  let component: CompA44Component;
  let fixture: ComponentFixture<CompA44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA44Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
