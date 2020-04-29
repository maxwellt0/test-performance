import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA255Component } from './comp-a255.component';

describe('CompA255Component', () => {
  let component: CompA255Component;
  let fixture: ComponentFixture<CompA255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA255Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
