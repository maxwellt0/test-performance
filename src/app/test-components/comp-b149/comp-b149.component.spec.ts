import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB149Component } from './comp-b149.component';

describe('CompB149Component', () => {
  let component: CompB149Component;
  let fixture: ComponentFixture<CompB149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
