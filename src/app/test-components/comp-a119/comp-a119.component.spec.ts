import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA119Component } from './comp-a119.component';

describe('CompA119Component', () => {
  let component: CompA119Component;
  let fixture: ComponentFixture<CompA119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
