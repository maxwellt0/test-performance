import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA120Component } from './comp-a120.component';

describe('CompA120Component', () => {
  let component: CompA120Component;
  let fixture: ComponentFixture<CompA120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
