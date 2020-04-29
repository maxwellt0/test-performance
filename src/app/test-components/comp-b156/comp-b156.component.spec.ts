import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB156Component } from './comp-b156.component';

describe('CompB156Component', () => {
  let component: CompB156Component;
  let fixture: ComponentFixture<CompB156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
