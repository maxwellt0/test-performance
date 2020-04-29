import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA74Component } from './comp-a74.component';

describe('CompA74Component', () => {
  let component: CompA74Component;
  let fixture: ComponentFixture<CompA74Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA74Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
