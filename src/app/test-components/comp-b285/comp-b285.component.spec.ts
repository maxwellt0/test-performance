import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB285Component } from './comp-b285.component';

describe('CompB285Component', () => {
  let component: CompB285Component;
  let fixture: ComponentFixture<CompB285Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB285Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
