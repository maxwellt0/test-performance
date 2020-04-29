import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB34Component } from './comp-b34.component';

describe('CompB34Component', () => {
  let component: CompB34Component;
  let fixture: ComponentFixture<CompB34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB34Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
