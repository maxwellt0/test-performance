import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA80Component } from './comp-a80.component';

describe('CompA80Component', () => {
  let component: CompA80Component;
  let fixture: ComponentFixture<CompA80Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA80Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
