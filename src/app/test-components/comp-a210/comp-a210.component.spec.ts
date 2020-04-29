import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA210Component } from './comp-a210.component';

describe('CompA210Component', () => {
  let component: CompA210Component;
  let fixture: ComponentFixture<CompA210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
