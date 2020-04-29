import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB147Component } from './comp-b147.component';

describe('CompB147Component', () => {
  let component: CompB147Component;
  let fixture: ComponentFixture<CompB147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
