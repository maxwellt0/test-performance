import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA90Component } from './comp-a90.component';

describe('CompA90Component', () => {
  let component: CompA90Component;
  let fixture: ComponentFixture<CompA90Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA90Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
