import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB225Component } from './comp-b225.component';

describe('CompB225Component', () => {
  let component: CompB225Component;
  let fixture: ComponentFixture<CompB225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
