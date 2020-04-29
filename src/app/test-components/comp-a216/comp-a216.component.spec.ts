import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA216Component } from './comp-a216.component';

describe('CompA216Component', () => {
  let component: CompA216Component;
  let fixture: ComponentFixture<CompA216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
