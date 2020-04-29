import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA35Component } from './comp-a35.component';

describe('CompA35Component', () => {
  let component: CompA35Component;
  let fixture: ComponentFixture<CompA35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
