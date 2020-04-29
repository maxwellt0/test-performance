import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA45Component } from './comp-a45.component';

describe('CompA45Component', () => {
  let component: CompA45Component;
  let fixture: ComponentFixture<CompA45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA45Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
