import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB184Component } from './comp-b184.component';

describe('CompB184Component', () => {
  let component: CompB184Component;
  let fixture: ComponentFixture<CompB184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
