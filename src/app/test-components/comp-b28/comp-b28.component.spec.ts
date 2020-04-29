import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB28Component } from './comp-b28.component';

describe('CompB28Component', () => {
  let component: CompB28Component;
  let fixture: ComponentFixture<CompB28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
