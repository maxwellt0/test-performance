import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB58Component } from './comp-b58.component';

describe('CompB58Component', () => {
  let component: CompB58Component;
  let fixture: ComponentFixture<CompB58Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB58Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
