import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA183Component } from './comp-a183.component';

describe('CompA183Component', () => {
  let component: CompA183Component;
  let fixture: ComponentFixture<CompA183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
