import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA96Component } from './comp-a96.component';

describe('CompA96Component', () => {
  let component: CompA96Component;
  let fixture: ComponentFixture<CompA96Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA96Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
