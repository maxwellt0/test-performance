import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB53Component } from './comp-b53.component';

describe('CompB53Component', () => {
  let component: CompB53Component;
  let fixture: ComponentFixture<CompB53Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB53Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
