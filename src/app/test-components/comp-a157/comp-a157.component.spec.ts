import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA157Component } from './comp-a157.component';

describe('CompA157Component', () => {
  let component: CompA157Component;
  let fixture: ComponentFixture<CompA157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
