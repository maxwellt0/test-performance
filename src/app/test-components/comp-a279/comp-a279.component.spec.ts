import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA279Component } from './comp-a279.component';

describe('CompA279Component', () => {
  let component: CompA279Component;
  let fixture: ComponentFixture<CompA279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA279Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
