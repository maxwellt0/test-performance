import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB157Component } from './comp-b157.component';

describe('CompB157Component', () => {
  let component: CompB157Component;
  let fixture: ComponentFixture<CompB157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
