import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA168Component } from './comp-a168.component';

describe('CompA168Component', () => {
  let component: CompA168Component;
  let fixture: ComponentFixture<CompA168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
