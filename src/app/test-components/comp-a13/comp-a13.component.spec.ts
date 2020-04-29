import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA13Component } from './comp-a13.component';

describe('CompA13Component', () => {
  let component: CompA13Component;
  let fixture: ComponentFixture<CompA13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
