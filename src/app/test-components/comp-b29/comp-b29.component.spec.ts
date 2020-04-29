import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB29Component } from './comp-b29.component';

describe('CompB29Component', () => {
  let component: CompB29Component;
  let fixture: ComponentFixture<CompB29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
