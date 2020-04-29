import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA77Component } from './comp-a77.component';

describe('CompA77Component', () => {
  let component: CompA77Component;
  let fixture: ComponentFixture<CompA77Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA77Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
