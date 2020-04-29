import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA192Component } from './comp-a192.component';

describe('CompA192Component', () => {
  let component: CompA192Component;
  let fixture: ComponentFixture<CompA192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
