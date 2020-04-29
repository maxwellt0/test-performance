import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA117Component } from './comp-a117.component';

describe('CompA117Component', () => {
  let component: CompA117Component;
  let fixture: ComponentFixture<CompA117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
