import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB151Component } from './comp-b151.component';

describe('CompB151Component', () => {
  let component: CompB151Component;
  let fixture: ComponentFixture<CompB151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
