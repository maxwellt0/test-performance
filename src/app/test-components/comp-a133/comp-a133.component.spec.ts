import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA133Component } from './comp-a133.component';

describe('CompA133Component', () => {
  let component: CompA133Component;
  let fixture: ComponentFixture<CompA133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
