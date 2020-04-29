import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA211Component } from './comp-a211.component';

describe('CompA211Component', () => {
  let component: CompA211Component;
  let fixture: ComponentFixture<CompA211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
