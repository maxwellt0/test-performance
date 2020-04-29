import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA6Component } from './comp-a6.component';

describe('CompA6Component', () => {
  let component: CompA6Component;
  let fixture: ComponentFixture<CompA6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
