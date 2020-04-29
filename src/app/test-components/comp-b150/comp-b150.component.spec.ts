import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB150Component } from './comp-b150.component';

describe('CompB150Component', () => {
  let component: CompB150Component;
  let fixture: ComponentFixture<CompB150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
