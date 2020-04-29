import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA293Component } from './comp-a293.component';

describe('CompA293Component', () => {
  let component: CompA293Component;
  let fixture: ComponentFixture<CompA293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
