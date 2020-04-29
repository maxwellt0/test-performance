import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB175Component } from './comp-b175.component';

describe('CompB175Component', () => {
  let component: CompB175Component;
  let fixture: ComponentFixture<CompB175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB175Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
