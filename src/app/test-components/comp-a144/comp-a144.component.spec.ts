import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA144Component } from './comp-a144.component';

describe('CompA144Component', () => {
  let component: CompA144Component;
  let fixture: ComponentFixture<CompA144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
