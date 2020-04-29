import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA76Component } from './comp-a76.component';

describe('CompA76Component', () => {
  let component: CompA76Component;
  let fixture: ComponentFixture<CompA76Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA76Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
