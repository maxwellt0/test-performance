import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB15Component } from './comp-b15.component';

describe('CompB15Component', () => {
  let component: CompB15Component;
  let fixture: ComponentFixture<CompB15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
