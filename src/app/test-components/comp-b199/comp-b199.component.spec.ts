import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB199Component } from './comp-b199.component';

describe('CompB199Component', () => {
  let component: CompB199Component;
  let fixture: ComponentFixture<CompB199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
