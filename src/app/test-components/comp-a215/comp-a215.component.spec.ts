import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA215Component } from './comp-a215.component';

describe('CompA215Component', () => {
  let component: CompA215Component;
  let fixture: ComponentFixture<CompA215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
