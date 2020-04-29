import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB20Component } from './comp-b20.component';

describe('CompB20Component', () => {
  let component: CompB20Component;
  let fixture: ComponentFixture<CompB20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
