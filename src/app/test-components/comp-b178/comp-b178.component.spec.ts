import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB178Component } from './comp-b178.component';

describe('CompB178Component', () => {
  let component: CompB178Component;
  let fixture: ComponentFixture<CompB178Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB178Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
