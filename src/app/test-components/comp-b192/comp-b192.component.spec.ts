import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB192Component } from './comp-b192.component';

describe('CompB192Component', () => {
  let component: CompB192Component;
  let fixture: ComponentFixture<CompB192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
