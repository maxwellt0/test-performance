import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB195Component } from './comp-b195.component';

describe('CompB195Component', () => {
  let component: CompB195Component;
  let fixture: ComponentFixture<CompB195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
