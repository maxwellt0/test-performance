import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA245Component } from './comp-a245.component';

describe('CompA245Component', () => {
  let component: CompA245Component;
  let fixture: ComponentFixture<CompA245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
