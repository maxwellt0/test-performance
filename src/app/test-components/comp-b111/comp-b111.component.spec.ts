import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB111Component } from './comp-b111.component';

describe('CompB111Component', () => {
  let component: CompB111Component;
  let fixture: ComponentFixture<CompB111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
