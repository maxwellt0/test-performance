import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA264Component } from './comp-a264.component';

describe('CompA264Component', () => {
  let component: CompA264Component;
  let fixture: ComponentFixture<CompA264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
