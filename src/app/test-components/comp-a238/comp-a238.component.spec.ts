import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA238Component } from './comp-a238.component';

describe('CompA238Component', () => {
  let component: CompA238Component;
  let fixture: ComponentFixture<CompA238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
