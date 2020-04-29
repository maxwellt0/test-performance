import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB33Component } from './comp-b33.component';

describe('CompB33Component', () => {
  let component: CompB33Component;
  let fixture: ComponentFixture<CompB33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
