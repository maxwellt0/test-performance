import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB81Component } from './comp-b81.component';

describe('CompB81Component', () => {
  let component: CompB81Component;
  let fixture: ComponentFixture<CompB81Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB81Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
