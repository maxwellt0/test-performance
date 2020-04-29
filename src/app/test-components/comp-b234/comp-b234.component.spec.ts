import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB234Component } from './comp-b234.component';

describe('CompB234Component', () => {
  let component: CompB234Component;
  let fixture: ComponentFixture<CompB234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
