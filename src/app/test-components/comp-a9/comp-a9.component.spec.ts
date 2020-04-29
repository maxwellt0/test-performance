import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA9Component } from './comp-a9.component';

describe('CompA9Component', () => {
  let component: CompA9Component;
  let fixture: ComponentFixture<CompA9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
