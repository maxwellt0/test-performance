import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB294Component } from './comp-b294.component';

describe('CompB294Component', () => {
  let component: CompB294Component;
  let fixture: ComponentFixture<CompB294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB294Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
