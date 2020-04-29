import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA193Component } from './comp-a193.component';

describe('CompA193Component', () => {
  let component: CompA193Component;
  let fixture: ComponentFixture<CompA193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
