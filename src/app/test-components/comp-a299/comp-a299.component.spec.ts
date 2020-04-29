import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA299Component } from './comp-a299.component';

describe('CompA299Component', () => {
  let component: CompA299Component;
  let fixture: ComponentFixture<CompA299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
