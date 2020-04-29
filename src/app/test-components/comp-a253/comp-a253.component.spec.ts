import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA253Component } from './comp-a253.component';

describe('CompA253Component', () => {
  let component: CompA253Component;
  let fixture: ComponentFixture<CompA253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
