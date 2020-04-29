import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB128Component } from './comp-b128.component';

describe('CompB128Component', () => {
  let component: CompB128Component;
  let fixture: ComponentFixture<CompB128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
