import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA196Component } from './comp-a196.component';

describe('CompA196Component', () => {
  let component: CompA196Component;
  let fixture: ComponentFixture<CompA196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
