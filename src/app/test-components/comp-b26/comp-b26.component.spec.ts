import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB26Component } from './comp-b26.component';

describe('CompB26Component', () => {
  let component: CompB26Component;
  let fixture: ComponentFixture<CompB26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
