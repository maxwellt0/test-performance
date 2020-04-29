import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB70Component } from './comp-b70.component';

describe('CompB70Component', () => {
  let component: CompB70Component;
  let fixture: ComponentFixture<CompB70Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB70Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
