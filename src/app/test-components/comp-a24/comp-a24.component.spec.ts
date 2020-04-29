import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA24Component } from './comp-a24.component';

describe('CompA24Component', () => {
  let component: CompA24Component;
  let fixture: ComponentFixture<CompA24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
