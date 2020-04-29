import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA123Component } from './comp-a123.component';

describe('CompA123Component', () => {
  let component: CompA123Component;
  let fixture: ComponentFixture<CompA123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
