import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB210Component } from './comp-b210.component';

describe('CompB210Component', () => {
  let component: CompB210Component;
  let fixture: ComponentFixture<CompB210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
