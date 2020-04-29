import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA12Component } from './comp-a12.component';

describe('CompA12Component', () => {
  let component: CompA12Component;
  let fixture: ComponentFixture<CompA12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
