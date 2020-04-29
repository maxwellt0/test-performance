import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA137Component } from './comp-a137.component';

describe('CompA137Component', () => {
  let component: CompA137Component;
  let fixture: ComponentFixture<CompA137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
