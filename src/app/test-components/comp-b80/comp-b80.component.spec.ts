import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB80Component } from './comp-b80.component';

describe('CompB80Component', () => {
  let component: CompB80Component;
  let fixture: ComponentFixture<CompB80Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB80Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
