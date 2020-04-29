import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB13Component } from './comp-b13.component';

describe('CompB13Component', () => {
  let component: CompB13Component;
  let fixture: ComponentFixture<CompB13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
