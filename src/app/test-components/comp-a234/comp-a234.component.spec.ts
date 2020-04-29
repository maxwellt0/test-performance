import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA234Component } from './comp-a234.component';

describe('CompA234Component', () => {
  let component: CompA234Component;
  let fixture: ComponentFixture<CompA234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
