import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA169Component } from './comp-a169.component';

describe('CompA169Component', () => {
  let component: CompA169Component;
  let fixture: ComponentFixture<CompA169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
