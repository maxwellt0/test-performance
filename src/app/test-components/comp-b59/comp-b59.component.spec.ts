import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB59Component } from './comp-b59.component';

describe('CompB59Component', () => {
  let component: CompB59Component;
  let fixture: ComponentFixture<CompB59Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB59Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
