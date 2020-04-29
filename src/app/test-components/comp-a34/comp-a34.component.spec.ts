import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA34Component } from './comp-a34.component';

describe('CompA34Component', () => {
  let component: CompA34Component;
  let fixture: ComponentFixture<CompA34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA34Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
