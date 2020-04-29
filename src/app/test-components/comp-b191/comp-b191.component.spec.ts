import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB191Component } from './comp-b191.component';

describe('CompB191Component', () => {
  let component: CompB191Component;
  let fixture: ComponentFixture<CompB191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
