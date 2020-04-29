import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB271Component } from './comp-b271.component';

describe('CompB271Component', () => {
  let component: CompB271Component;
  let fixture: ComponentFixture<CompB271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
