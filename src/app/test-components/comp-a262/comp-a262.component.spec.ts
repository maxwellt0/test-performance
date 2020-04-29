import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA262Component } from './comp-a262.component';

describe('CompA262Component', () => {
  let component: CompA262Component;
  let fixture: ComponentFixture<CompA262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA262Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
