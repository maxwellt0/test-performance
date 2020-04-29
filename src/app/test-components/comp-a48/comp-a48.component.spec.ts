import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA48Component } from './comp-a48.component';

describe('CompA48Component', () => {
  let component: CompA48Component;
  let fixture: ComponentFixture<CompA48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA48Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
