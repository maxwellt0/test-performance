import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA292Component } from './comp-a292.component';

describe('CompA292Component', () => {
  let component: CompA292Component;
  let fixture: ComponentFixture<CompA292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
