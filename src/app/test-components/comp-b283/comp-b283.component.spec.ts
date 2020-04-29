import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB283Component } from './comp-b283.component';

describe('CompB283Component', () => {
  let component: CompB283Component;
  let fixture: ComponentFixture<CompB283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
