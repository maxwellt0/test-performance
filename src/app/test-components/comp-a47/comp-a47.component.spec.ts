import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA47Component } from './comp-a47.component';

describe('CompA47Component', () => {
  let component: CompA47Component;
  let fixture: ComponentFixture<CompA47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA47Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
