import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA220Component } from './comp-a220.component';

describe('CompA220Component', () => {
  let component: CompA220Component;
  let fixture: ComponentFixture<CompA220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
