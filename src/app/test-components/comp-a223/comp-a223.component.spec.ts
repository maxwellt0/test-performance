import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA223Component } from './comp-a223.component';

describe('CompA223Component', () => {
  let component: CompA223Component;
  let fixture: ComponentFixture<CompA223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
