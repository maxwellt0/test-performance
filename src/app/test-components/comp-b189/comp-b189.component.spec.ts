import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB189Component } from './comp-b189.component';

describe('CompB189Component', () => {
  let component: CompB189Component;
  let fixture: ComponentFixture<CompB189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB189Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
