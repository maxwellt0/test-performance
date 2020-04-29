import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA205Component } from './comp-a205.component';

describe('CompA205Component', () => {
  let component: CompA205Component;
  let fixture: ComponentFixture<CompA205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
