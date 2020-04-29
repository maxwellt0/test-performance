import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA82Component } from './comp-a82.component';

describe('CompA82Component', () => {
  let component: CompA82Component;
  let fixture: ComponentFixture<CompA82Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA82Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
