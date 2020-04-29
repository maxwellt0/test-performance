import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB78Component } from './comp-b78.component';

describe('CompB78Component', () => {
  let component: CompB78Component;
  let fixture: ComponentFixture<CompB78Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB78Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
