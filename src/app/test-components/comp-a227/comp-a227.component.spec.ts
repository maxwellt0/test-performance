import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA227Component } from './comp-a227.component';

describe('CompA227Component', () => {
  let component: CompA227Component;
  let fixture: ComponentFixture<CompA227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
