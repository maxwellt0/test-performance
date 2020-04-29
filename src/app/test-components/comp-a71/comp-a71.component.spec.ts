import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA71Component } from './comp-a71.component';

describe('CompA71Component', () => {
  let component: CompA71Component;
  let fixture: ComponentFixture<CompA71Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA71Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
