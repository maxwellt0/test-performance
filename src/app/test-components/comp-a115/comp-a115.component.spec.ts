import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA115Component } from './comp-a115.component';

describe('CompA115Component', () => {
  let component: CompA115Component;
  let fixture: ComponentFixture<CompA115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
