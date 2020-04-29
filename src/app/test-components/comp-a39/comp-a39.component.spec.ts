import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA39Component } from './comp-a39.component';

describe('CompA39Component', () => {
  let component: CompA39Component;
  let fixture: ComponentFixture<CompA39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA39Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
