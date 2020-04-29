import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA217Component } from './comp-a217.component';

describe('CompA217Component', () => {
  let component: CompA217Component;
  let fixture: ComponentFixture<CompA217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
