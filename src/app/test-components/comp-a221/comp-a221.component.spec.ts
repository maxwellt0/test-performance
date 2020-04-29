import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA221Component } from './comp-a221.component';

describe('CompA221Component', () => {
  let component: CompA221Component;
  let fixture: ComponentFixture<CompA221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
