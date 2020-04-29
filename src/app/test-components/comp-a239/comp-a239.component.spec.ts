import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA239Component } from './comp-a239.component';

describe('CompA239Component', () => {
  let component: CompA239Component;
  let fixture: ComponentFixture<CompA239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
