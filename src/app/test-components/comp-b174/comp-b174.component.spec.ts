import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB174Component } from './comp-b174.component';

describe('CompB174Component', () => {
  let component: CompB174Component;
  let fixture: ComponentFixture<CompB174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
