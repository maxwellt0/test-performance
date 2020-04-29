import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB105Component } from './comp-b105.component';

describe('CompB105Component', () => {
  let component: CompB105Component;
  let fixture: ComponentFixture<CompB105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
