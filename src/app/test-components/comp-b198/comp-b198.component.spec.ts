import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB198Component } from './comp-b198.component';

describe('CompB198Component', () => {
  let component: CompB198Component;
  let fixture: ComponentFixture<CompB198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
