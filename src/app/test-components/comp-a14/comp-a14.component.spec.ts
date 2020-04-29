import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA14Component } from './comp-a14.component';

describe('CompA14Component', () => {
  let component: CompA14Component;
  let fixture: ComponentFixture<CompA14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
