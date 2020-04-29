import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA20Component } from './comp-a20.component';

describe('CompA20Component', () => {
  let component: CompA20Component;
  let fixture: ComponentFixture<CompA20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
