import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB89Component } from './comp-b89.component';

describe('CompB89Component', () => {
  let component: CompB89Component;
  let fixture: ComponentFixture<CompB89Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB89Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
