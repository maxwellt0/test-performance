import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB255Component } from './comp-b255.component';

describe('CompB255Component', () => {
  let component: CompB255Component;
  let fixture: ComponentFixture<CompB255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB255Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
