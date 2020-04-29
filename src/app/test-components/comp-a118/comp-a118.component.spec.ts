import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA118Component } from './comp-a118.component';

describe('CompA118Component', () => {
  let component: CompA118Component;
  let fixture: ComponentFixture<CompA118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
