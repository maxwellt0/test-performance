import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB296Component } from './comp-b296.component';

describe('CompB296Component', () => {
  let component: CompB296Component;
  let fixture: ComponentFixture<CompB296Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB296Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
