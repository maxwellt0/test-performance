import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB11Component } from './comp-b11.component';

describe('CompB11Component', () => {
  let component: CompB11Component;
  let fixture: ComponentFixture<CompB11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
