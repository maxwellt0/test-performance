import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA276Component } from './comp-a276.component';

describe('CompA276Component', () => {
  let component: CompA276Component;
  let fixture: ComponentFixture<CompA276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
