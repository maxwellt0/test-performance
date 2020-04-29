import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB42Component } from './comp-b42.component';

describe('CompB42Component', () => {
  let component: CompB42Component;
  let fixture: ComponentFixture<CompB42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
