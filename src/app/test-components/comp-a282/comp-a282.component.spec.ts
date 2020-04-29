import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA282Component } from './comp-a282.component';

describe('CompA282Component', () => {
  let component: CompA282Component;
  let fixture: ComponentFixture<CompA282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA282Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
