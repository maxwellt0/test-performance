import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA122Component } from './comp-a122.component';

describe('CompA122Component', () => {
  let component: CompA122Component;
  let fixture: ComponentFixture<CompA122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
