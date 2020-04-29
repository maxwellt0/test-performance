import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA17Component } from './comp-a17.component';

describe('CompA17Component', () => {
  let component: CompA17Component;
  let fixture: ComponentFixture<CompA17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
