import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA51Component } from './comp-a51.component';

describe('CompA51Component', () => {
  let component: CompA51Component;
  let fixture: ComponentFixture<CompA51Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA51Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
