import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB194Component } from './comp-b194.component';

describe('CompB194Component', () => {
  let component: CompB194Component;
  let fixture: ComponentFixture<CompB194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB194Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
