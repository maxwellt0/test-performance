import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB269Component } from './comp-b269.component';

describe('CompB269Component', () => {
  let component: CompB269Component;
  let fixture: ComponentFixture<CompB269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB269Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
