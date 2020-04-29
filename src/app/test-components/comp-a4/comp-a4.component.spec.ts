import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA4Component } from './comp-a4.component';

describe('CompA4Component', () => {
  let component: CompA4Component;
  let fixture: ComponentFixture<CompA4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
