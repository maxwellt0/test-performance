import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA197Component } from './comp-a197.component';

describe('CompA197Component', () => {
  let component: CompA197Component;
  let fixture: ComponentFixture<CompA197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
