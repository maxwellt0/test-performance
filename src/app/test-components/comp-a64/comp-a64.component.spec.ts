import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA64Component } from './comp-a64.component';

describe('CompA64Component', () => {
  let component: CompA64Component;
  let fixture: ComponentFixture<CompA64Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
