import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB75Component } from './comp-b75.component';

describe('CompB75Component', () => {
  let component: CompB75Component;
  let fixture: ComponentFixture<CompB75Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB75Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
