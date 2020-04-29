import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB152Component } from './comp-b152.component';

describe('CompB152Component', () => {
  let component: CompB152Component;
  let fixture: ComponentFixture<CompB152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
