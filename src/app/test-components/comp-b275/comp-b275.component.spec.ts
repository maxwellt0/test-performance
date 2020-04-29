import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB275Component } from './comp-b275.component';

describe('CompB275Component', () => {
  let component: CompB275Component;
  let fixture: ComponentFixture<CompB275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
