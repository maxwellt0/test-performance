import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB120Component } from './comp-b120.component';

describe('CompB120Component', () => {
  let component: CompB120Component;
  let fixture: ComponentFixture<CompB120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
