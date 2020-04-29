import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB145Component } from './comp-b145.component';

describe('CompB145Component', () => {
  let component: CompB145Component;
  let fixture: ComponentFixture<CompB145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
