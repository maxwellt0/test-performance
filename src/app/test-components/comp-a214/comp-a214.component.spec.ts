import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA214Component } from './comp-a214.component';

describe('CompA214Component', () => {
  let component: CompA214Component;
  let fixture: ComponentFixture<CompA214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
