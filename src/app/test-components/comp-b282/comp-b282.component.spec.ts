import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB282Component } from './comp-b282.component';

describe('CompB282Component', () => {
  let component: CompB282Component;
  let fixture: ComponentFixture<CompB282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB282Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
