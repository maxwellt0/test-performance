import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA11Component } from './comp-a11.component';

describe('CompA11Component', () => {
  let component: CompA11Component;
  let fixture: ComponentFixture<CompA11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
