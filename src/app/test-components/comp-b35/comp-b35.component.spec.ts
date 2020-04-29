import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB35Component } from './comp-b35.component';

describe('CompB35Component', () => {
  let component: CompB35Component;
  let fixture: ComponentFixture<CompB35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
