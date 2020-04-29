import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB71Component } from './comp-b71.component';

describe('CompB71Component', () => {
  let component: CompB71Component;
  let fixture: ComponentFixture<CompB71Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB71Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
