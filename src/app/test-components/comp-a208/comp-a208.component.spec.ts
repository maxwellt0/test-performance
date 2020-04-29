import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA208Component } from './comp-a208.component';

describe('CompA208Component', () => {
  let component: CompA208Component;
  let fixture: ComponentFixture<CompA208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
