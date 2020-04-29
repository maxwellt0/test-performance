import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB219Component } from './comp-b219.component';

describe('CompB219Component', () => {
  let component: CompB219Component;
  let fixture: ComponentFixture<CompB219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
