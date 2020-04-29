import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA258Component } from './comp-a258.component';

describe('CompA258Component', () => {
  let component: CompA258Component;
  let fixture: ComponentFixture<CompA258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
