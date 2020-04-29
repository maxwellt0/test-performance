import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB215Component } from './comp-b215.component';

describe('CompB215Component', () => {
  let component: CompB215Component;
  let fixture: ComponentFixture<CompB215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
