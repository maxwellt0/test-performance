import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB50Component } from './comp-b50.component';

describe('CompB50Component', () => {
  let component: CompB50Component;
  let fixture: ComponentFixture<CompB50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
