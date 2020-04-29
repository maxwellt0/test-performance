import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA273Component } from './comp-a273.component';

describe('CompA273Component', () => {
  let component: CompA273Component;
  let fixture: ComponentFixture<CompA273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
