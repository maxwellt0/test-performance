import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA291Component } from './comp-a291.component';

describe('CompA291Component', () => {
  let component: CompA291Component;
  let fixture: ComponentFixture<CompA291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
