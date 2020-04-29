import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB139Component } from './comp-b139.component';

describe('CompB139Component', () => {
  let component: CompB139Component;
  let fixture: ComponentFixture<CompB139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
