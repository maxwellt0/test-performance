import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA139Component } from './comp-a139.component';

describe('CompA139Component', () => {
  let component: CompA139Component;
  let fixture: ComponentFixture<CompA139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
