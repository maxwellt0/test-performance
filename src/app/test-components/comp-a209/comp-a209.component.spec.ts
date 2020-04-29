import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA209Component } from './comp-a209.component';

describe('CompA209Component', () => {
  let component: CompA209Component;
  let fixture: ComponentFixture<CompA209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
