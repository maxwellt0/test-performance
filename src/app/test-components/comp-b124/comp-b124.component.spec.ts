import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB124Component } from './comp-b124.component';

describe('CompB124Component', () => {
  let component: CompB124Component;
  let fixture: ComponentFixture<CompB124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
