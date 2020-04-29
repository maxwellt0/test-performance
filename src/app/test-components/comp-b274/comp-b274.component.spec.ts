import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB274Component } from './comp-b274.component';

describe('CompB274Component', () => {
  let component: CompB274Component;
  let fixture: ComponentFixture<CompB274Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
