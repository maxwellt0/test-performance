import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA225Component } from './comp-a225.component';

describe('CompA225Component', () => {
  let component: CompA225Component;
  let fixture: ComponentFixture<CompA225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
