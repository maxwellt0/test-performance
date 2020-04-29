import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA257Component } from './comp-a257.component';

describe('CompA257Component', () => {
  let component: CompA257Component;
  let fixture: ComponentFixture<CompA257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
