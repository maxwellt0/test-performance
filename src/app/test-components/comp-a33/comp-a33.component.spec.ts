import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA33Component } from './comp-a33.component';

describe('CompA33Component', () => {
  let component: CompA33Component;
  let fixture: ComponentFixture<CompA33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
