import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA202Component } from './comp-a202.component';

describe('CompA202Component', () => {
  let component: CompA202Component;
  let fixture: ComponentFixture<CompA202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
