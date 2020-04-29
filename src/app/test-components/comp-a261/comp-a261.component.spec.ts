import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA261Component } from './comp-a261.component';

describe('CompA261Component', () => {
  let component: CompA261Component;
  let fixture: ComponentFixture<CompA261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
