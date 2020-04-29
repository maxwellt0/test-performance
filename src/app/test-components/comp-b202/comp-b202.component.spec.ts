import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB202Component } from './comp-b202.component';

describe('CompB202Component', () => {
  let component: CompB202Component;
  let fixture: ComponentFixture<CompB202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
