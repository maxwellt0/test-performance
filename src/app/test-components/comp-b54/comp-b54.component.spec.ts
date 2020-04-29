import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB54Component } from './comp-b54.component';

describe('CompB54Component', () => {
  let component: CompB54Component;
  let fixture: ComponentFixture<CompB54Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB54Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
