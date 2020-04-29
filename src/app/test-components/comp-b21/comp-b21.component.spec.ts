import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB21Component } from './comp-b21.component';

describe('CompB21Component', () => {
  let component: CompB21Component;
  let fixture: ComponentFixture<CompB21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
