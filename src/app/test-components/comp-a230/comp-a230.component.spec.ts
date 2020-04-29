import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA230Component } from './comp-a230.component';

describe('CompA230Component', () => {
  let component: CompA230Component;
  let fixture: ComponentFixture<CompA230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA230Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
