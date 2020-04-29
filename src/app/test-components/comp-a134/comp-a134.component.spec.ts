import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA134Component } from './comp-a134.component';

describe('CompA134Component', () => {
  let component: CompA134Component;
  let fixture: ComponentFixture<CompA134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
