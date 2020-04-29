import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB115Component } from './comp-b115.component';

describe('CompB115Component', () => {
  let component: CompB115Component;
  let fixture: ComponentFixture<CompB115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
