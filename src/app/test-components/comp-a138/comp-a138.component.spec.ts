import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA138Component } from './comp-a138.component';

describe('CompA138Component', () => {
  let component: CompA138Component;
  let fixture: ComponentFixture<CompA138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
