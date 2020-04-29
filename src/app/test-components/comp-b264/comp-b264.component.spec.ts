import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB264Component } from './comp-b264.component';

describe('CompB264Component', () => {
  let component: CompB264Component;
  let fixture: ComponentFixture<CompB264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
