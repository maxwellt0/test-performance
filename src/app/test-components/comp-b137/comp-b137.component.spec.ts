import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB137Component } from './comp-b137.component';

describe('CompB137Component', () => {
  let component: CompB137Component;
  let fixture: ComponentFixture<CompB137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
