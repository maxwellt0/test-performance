import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB36Component } from './comp-b36.component';

describe('CompB36Component', () => {
  let component: CompB36Component;
  let fixture: ComponentFixture<CompB36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
