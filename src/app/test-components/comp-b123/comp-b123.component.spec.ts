import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB123Component } from './comp-b123.component';

describe('CompB123Component', () => {
  let component: CompB123Component;
  let fixture: ComponentFixture<CompB123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
