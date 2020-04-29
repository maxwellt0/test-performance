import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA27Component } from './comp-a27.component';

describe('CompA27Component', () => {
  let component: CompA27Component;
  let fixture: ComponentFixture<CompA27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
