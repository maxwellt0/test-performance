import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB12Component } from './comp-b12.component';

describe('CompB12Component', () => {
  let component: CompB12Component;
  let fixture: ComponentFixture<CompB12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
