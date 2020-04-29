import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB211Component } from './comp-b211.component';

describe('CompB211Component', () => {
  let component: CompB211Component;
  let fixture: ComponentFixture<CompB211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
