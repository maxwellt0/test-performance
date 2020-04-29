import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA132Component } from './comp-a132.component';

describe('CompA132Component', () => {
  let component: CompA132Component;
  let fixture: ComponentFixture<CompA132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
