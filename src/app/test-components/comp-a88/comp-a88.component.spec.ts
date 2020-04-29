import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA88Component } from './comp-a88.component';

describe('CompA88Component', () => {
  let component: CompA88Component;
  let fixture: ComponentFixture<CompA88Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA88Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
