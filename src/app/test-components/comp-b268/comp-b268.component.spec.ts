import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB268Component } from './comp-b268.component';

describe('CompB268Component', () => {
  let component: CompB268Component;
  let fixture: ComponentFixture<CompB268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
