import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB62Component } from './comp-b62.component';

describe('CompB62Component', () => {
  let component: CompB62Component;
  let fixture: ComponentFixture<CompB62Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB62Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
