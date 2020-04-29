import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB185Component } from './comp-b185.component';

describe('CompB185Component', () => {
  let component: CompB185Component;
  let fixture: ComponentFixture<CompB185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB185Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
