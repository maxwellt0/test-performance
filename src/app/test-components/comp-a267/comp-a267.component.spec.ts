import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA267Component } from './comp-a267.component';

describe('CompA267Component', () => {
  let component: CompA267Component;
  let fixture: ComponentFixture<CompA267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
