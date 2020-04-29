import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA7Component } from './comp-a7.component';

describe('CompA7Component', () => {
  let component: CompA7Component;
  let fixture: ComponentFixture<CompA7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
