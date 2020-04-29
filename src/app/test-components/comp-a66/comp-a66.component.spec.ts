import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA66Component } from './comp-a66.component';

describe('CompA66Component', () => {
  let component: CompA66Component;
  let fixture: ComponentFixture<CompA66Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA66Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
