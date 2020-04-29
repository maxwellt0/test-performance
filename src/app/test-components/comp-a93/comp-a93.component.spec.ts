import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA93Component } from './comp-a93.component';

describe('CompA93Component', () => {
  let component: CompA93Component;
  let fixture: ComponentFixture<CompA93Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA93Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
