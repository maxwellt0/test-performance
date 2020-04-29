import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB17Component } from './comp-b17.component';

describe('CompB17Component', () => {
  let component: CompB17Component;
  let fixture: ComponentFixture<CompB17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
