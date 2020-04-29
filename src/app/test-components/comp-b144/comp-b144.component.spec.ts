import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB144Component } from './comp-b144.component';

describe('CompB144Component', () => {
  let component: CompB144Component;
  let fixture: ComponentFixture<CompB144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
