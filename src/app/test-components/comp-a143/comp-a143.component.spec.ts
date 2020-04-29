import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA143Component } from './comp-a143.component';

describe('CompA143Component', () => {
  let component: CompA143Component;
  let fixture: ComponentFixture<CompA143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
