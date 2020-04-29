import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB8Component } from './comp-b8.component';

describe('CompB8Component', () => {
  let component: CompB8Component;
  let fixture: ComponentFixture<CompB8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
