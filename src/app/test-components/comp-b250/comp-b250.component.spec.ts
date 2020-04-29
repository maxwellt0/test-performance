import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB250Component } from './comp-b250.component';

describe('CompB250Component', () => {
  let component: CompB250Component;
  let fixture: ComponentFixture<CompB250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
