import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA94Component } from './comp-a94.component';

describe('CompA94Component', () => {
  let component: CompA94Component;
  let fixture: ComponentFixture<CompA94Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA94Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
