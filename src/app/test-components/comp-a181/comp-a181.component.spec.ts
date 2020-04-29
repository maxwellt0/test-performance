import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA181Component } from './comp-a181.component';

describe('CompA181Component', () => {
  let component: CompA181Component;
  let fixture: ComponentFixture<CompA181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
