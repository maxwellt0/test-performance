import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA295Component } from './comp-a295.component';

describe('CompA295Component', () => {
  let component: CompA295Component;
  let fixture: ComponentFixture<CompA295Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA295Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
