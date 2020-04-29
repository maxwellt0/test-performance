import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB201Component } from './comp-b201.component';

describe('CompB201Component', () => {
  let component: CompB201Component;
  let fixture: ComponentFixture<CompB201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
