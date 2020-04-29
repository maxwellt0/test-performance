import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA287Component } from './comp-a287.component';

describe('CompA287Component', () => {
  let component: CompA287Component;
  let fixture: ComponentFixture<CompA287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
