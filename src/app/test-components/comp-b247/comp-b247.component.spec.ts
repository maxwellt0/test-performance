import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB247Component } from './comp-b247.component';

describe('CompB247Component', () => {
  let component: CompB247Component;
  let fixture: ComponentFixture<CompB247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
