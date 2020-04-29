import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA203Component } from './comp-a203.component';

describe('CompA203Component', () => {
  let component: CompA203Component;
  let fixture: ComponentFixture<CompA203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
