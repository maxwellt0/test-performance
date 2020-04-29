import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA8Component } from './comp-a8.component';

describe('CompA8Component', () => {
  let component: CompA8Component;
  let fixture: ComponentFixture<CompA8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
