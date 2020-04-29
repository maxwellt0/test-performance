import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA184Component } from './comp-a184.component';

describe('CompA184Component', () => {
  let component: CompA184Component;
  let fixture: ComponentFixture<CompA184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
