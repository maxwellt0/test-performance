import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB196Component } from './comp-b196.component';

describe('CompB196Component', () => {
  let component: CompB196Component;
  let fixture: ComponentFixture<CompB196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
