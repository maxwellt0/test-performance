import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB246Component } from './comp-b246.component';

describe('CompB246Component', () => {
  let component: CompB246Component;
  let fixture: ComponentFixture<CompB246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
