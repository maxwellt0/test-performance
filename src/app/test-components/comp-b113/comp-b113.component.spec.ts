import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB113Component } from './comp-b113.component';

describe('CompB113Component', () => {
  let component: CompB113Component;
  let fixture: ComponentFixture<CompB113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
