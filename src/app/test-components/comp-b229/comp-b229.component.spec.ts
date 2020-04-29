import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB229Component } from './comp-b229.component';

describe('CompB229Component', () => {
  let component: CompB229Component;
  let fixture: ComponentFixture<CompB229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
