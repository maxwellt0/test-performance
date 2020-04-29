import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA40Component } from './comp-a40.component';

describe('CompA40Component', () => {
  let component: CompA40Component;
  let fixture: ComponentFixture<CompA40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA40Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
