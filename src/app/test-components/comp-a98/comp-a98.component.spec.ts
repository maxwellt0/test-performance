import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA98Component } from './comp-a98.component';

describe('CompA98Component', () => {
  let component: CompA98Component;
  let fixture: ComponentFixture<CompA98Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA98Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
