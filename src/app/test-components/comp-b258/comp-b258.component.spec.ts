import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB258Component } from './comp-b258.component';

describe('CompB258Component', () => {
  let component: CompB258Component;
  let fixture: ComponentFixture<CompB258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
