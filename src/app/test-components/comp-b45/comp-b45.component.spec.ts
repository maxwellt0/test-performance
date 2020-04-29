import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB45Component } from './comp-b45.component';

describe('CompB45Component', () => {
  let component: CompB45Component;
  let fixture: ComponentFixture<CompB45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB45Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
