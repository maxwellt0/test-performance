import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA189Component } from './comp-a189.component';

describe('CompA189Component', () => {
  let component: CompA189Component;
  let fixture: ComponentFixture<CompA189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA189Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
