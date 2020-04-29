import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA236Component } from './comp-a236.component';

describe('CompA236Component', () => {
  let component: CompA236Component;
  let fixture: ComponentFixture<CompA236Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA236Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
